import React, { useEffect } from 'react';
import UnitedTownshipPage from '../components/projects/UnitedTownshipPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function TownshipProjects() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <UnitedTownshipPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
