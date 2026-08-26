import React, { useEffect } from 'react';
import NewsEventsPage from '../components/news/NewsEventsPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function NewsEvents() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NewsEventsPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
