import React, { useEffect } from 'react';
import TestimonialsPage from '../components/testimonials/TestimonialsPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function Testimonials() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <TestimonialsPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/projects/residential');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
