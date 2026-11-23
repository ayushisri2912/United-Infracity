import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom React hook for luxury horizontal masked image reveals inspired by Lodha Group.
 * Supports left-to-right & right-to-left clip-path reveals, inner image zoom-out,
 * synchronized decorative borders, ScrollTrigger, and manual re-triggers.
 */
export default function useImageReveal({
  direction = 'left',
  duration = 1.3,
  scaleDuration = 1.4,
  scale = 1.08,
  scaleEnabled = true,
  start = 'top 85%',
  delay = 0,
  borderDelay = 0.1,
  once = true,
  ease = 'power3.inOut',
  containerRef: externalContainerRef,
  imageRef: externalImageRef,
  borderRef: externalBorderRef,
} = {}) {
  const internalContainerRef = useRef(null);
  const internalImageRef = useRef(null);
  const internalBorderRef = useRef(null);

  const containerRef = externalContainerRef || internalContainerRef;
  const imageRef = externalImageRef || internalImageRef;
  const borderRef = externalBorderRef || internalBorderRef;

  const initialClipPath = direction === 'right' 
    ? 'inset(0 0 0 100%)' 
    : 'inset(0 100% 0 0)';
  const finalClipPath = direction === 'right' 
    ? 'inset(0 0 0 0)' 
    : 'inset(0 0% 0 0)';

  // Manual trigger function (used e.g. for slide transitions in LuxuryInteriors)
  const triggerAnimation = (customDelay = 0, onCompleteCallback) => {
    const container = containerRef.current;
    if (!container) return;

    const img = imageRef.current || container.querySelector('img');
    const border = borderRef.current;

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(container, { clearProps: 'clipPath' });
      if (img) gsap.set(img, { scale: 1 });
      if (border) gsap.set(border, { clearProps: 'clipPath' });
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    const tl = gsap.timeline({
      delay: customDelay,
      onComplete: () => {
        gsap.set(container, { clearProps: 'clipPath' });
        if (border) gsap.set(border, { clearProps: 'clipPath' });
        if (onCompleteCallback) onCompleteCallback();
      }
    });

    tl.fromTo(
      container,
      { clipPath: initialClipPath },
      {
        clipPath: finalClipPath,
        duration,
        ease,
      },
      0
    );

    if (scaleEnabled && img) {
      tl.fromTo(
        img,
        { scale, transformOrigin: 'center center' },
        {
          scale: 1,
          duration: scaleDuration,
          ease,
        },
        0
      );
    }

    if (border) {
      tl.fromTo(
        border,
        { clipPath: initialClipPath },
        {
          clipPath: finalClipPath,
          duration,
          ease,
        },
        borderDelay
      );
    }

    return tl;
  };

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const img = imageRef.current || container.querySelector('img');
    const border = borderRef.current;

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(container, { clearProps: 'clipPath' });
      if (img) gsap.set(img, { scale: 1 });
      if (border) gsap.set(border, { clearProps: 'clipPath' });
      return;
    }

    // Prepare initial masked state
    gsap.set(container, { clipPath: initialClipPath });
    if (scaleEnabled && img) {
      gsap.set(img, { scale, transformOrigin: 'center center' });
    }
    if (border) {
      gsap.set(border, { clipPath: initialClipPath });
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start,
        once,
        onEnter: () => {
          const tl = gsap.timeline({
            delay,
            onComplete: () => {
              gsap.set(container, { clearProps: 'clipPath' });
              if (border) gsap.set(border, { clearProps: 'clipPath' });
            }
          });

          tl.to(
            container,
            {
              clipPath: finalClipPath,
              duration,
              ease,
            },
            0
          );

          if (scaleEnabled && img) {
            tl.to(
              img,
              {
                scale: 1,
                duration: scaleDuration,
                ease,
              },
              0
            );
          }

          if (border) {
            tl.to(
              border,
              {
                clipPath: finalClipPath,
                duration,
                ease,
              },
              borderDelay
            );
          }
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [direction, duration, scaleDuration, scale, scaleEnabled, start, delay, borderDelay, once, ease]);

  return {
    containerRef,
    imageRef,
    borderRef,
    triggerAnimation,
  };
}
