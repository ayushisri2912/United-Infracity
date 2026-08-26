import React, { useEffect } from 'react';
import GovernmentProjectsPage from '../components/projects/GovernmentProjectsPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function GovernmentProjects() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <GovernmentProjectsPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
