import React, { useEffect } from 'react';
import OngoingCommercialPage from '../components/projects/OngoingCommercialPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function CommercialProjects() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <OngoingCommercialPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
