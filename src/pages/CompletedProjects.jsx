import React, { useEffect } from 'react';
import CompletedProjectsPage from '../components/projects/CompletedProjectsPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function CompletedProjects() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <CompletedProjectsPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
