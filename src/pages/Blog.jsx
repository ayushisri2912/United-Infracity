import React, { useEffect } from 'react';
import BlogPage from '../components/blog/BlogPage';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const { openEnquire } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <BlogPage
      onOpenEnquire={openEnquire}
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
