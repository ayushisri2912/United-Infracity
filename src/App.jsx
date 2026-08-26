import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import AppRoutes from './routes/AppRoutes';
import SplashView from './components/common/SplashView';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleExplore = () => {
    setShowSplash(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ModalProvider>
        {showSplash ? (
          /* INITIAL LANDING SPLASH SCREEN */
          <SplashView onExplore={handleExplore} />
        ) : (
          /* MAIN APPLICATION ROUTES WITH SMOOTH FADE TRANSITION */
          <div className="animate-in fade-in duration-500">
            <AppRoutes />
          </div>
        )}
      </ModalProvider>
    </BrowserRouter>
  );
}
