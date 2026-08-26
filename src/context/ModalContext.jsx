import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedConfig, setSelectedConfig] = useState('All');

  const openEnquire = () => setIsEnquireOpen(true);
  const closeEnquire = () => setIsEnquireOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openUser = () => setIsUserOpen(true);
  const closeUser = () => setIsUserOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isEnquireOpen,
        openEnquire,
        closeEnquire,
        isSearchOpen,
        openSearch,
        closeSearch,
        isUserOpen,
        openUser,
        closeUser,
        activeProjectFilter,
        setActiveProjectFilter,
        selectedCity,
        setSelectedCity,
        selectedConfig,
        setSelectedConfig
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
