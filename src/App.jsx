import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </BrowserRouter>
  );
}

