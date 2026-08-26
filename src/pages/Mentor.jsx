import React, { useEffect } from 'react';
import MentorPage from '../components/mentor/MentorPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function Mentor() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <MentorPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
