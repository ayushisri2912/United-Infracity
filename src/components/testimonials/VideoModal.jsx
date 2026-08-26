import React, { useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoStory }) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoStory) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Click Backdrop Outside to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1C1C1A] rounded-2xl border border-[#C6A15B]/40 shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#141413]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cormorant font-bold text-white text-lg sm:text-xl">
                {videoStory.title}
              </h3>
              <p className="font-montserrat text-xs text-stone-400 font-light">
                Resident Story • {videoStory.projectName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            title="Close Video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black aspect-[16/9] w-full flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={videoStory.videoUrl}
            poster={videoStory.thumbnail}
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
          />

          {/* Custom Video Overlay Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white z-20">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-[#C6A15B] text-[#1C1C1A] hover:scale-105 transition-transform cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <span className="font-montserrat text-xs font-medium text-stone-200 hidden sm:inline">
                {videoStory.customerName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] text-[10px] uppercase font-bold tracking-wider">
                <CheckCircle className="w-3 h-3" />
                Verified Homeowner
              </span>
            </div>
          </div>
        </div>

        {/* Video Footer Info & Quote */}
        <div className="p-6 bg-[#141413] border-t border-stone-800 space-y-3">
          <blockquote className="font-cormorant text-xl text-stone-200 italic font-light">
            "{videoStory.quote}"
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-montserrat text-stone-400 gap-2">
            <span>Customer: <strong className="text-white">{videoStory.customerName}</strong> ({videoStory.designation})</span>
            <span className="text-[#C6A15B]">{videoStory.propertyDetails}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
