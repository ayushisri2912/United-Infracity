import React, { useEffect } from 'react';
import BrandPage from '../components/about/BrandPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <BrandPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onSelectSection={(path) => {
        if (path === 'mentor') navigate('/about/mentor');
        else if (path === 'management') navigate('/about/management');
        else if (path === 'projects') navigate('/projects/residential');
        else navigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
