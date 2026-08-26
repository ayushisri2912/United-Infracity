import React, { useEffect } from 'react';
import ManagementPage from '../components/management/ManagementPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function Management() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ManagementPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
