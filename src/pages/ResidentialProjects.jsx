import React, { useEffect } from 'react';
import OngoingResidentialPage from '../components/projects/OngoingResidentialPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function ResidentialProjects() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <OngoingResidentialPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
