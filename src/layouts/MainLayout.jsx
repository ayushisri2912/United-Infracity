import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import EnquiryModal from '../components/common/EnquiryModal';
import SearchModal from '../components/common/SearchModal';
import UserModal from '../components/common/UserModal';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1C1A] font-montserrat antialiased selection:bg-[#C6A15B] selection:text-white">
      
      {/* Sticky Global Navbar */}
      <Navbar />

      {/* Main Page Dynamic Outlet Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals Mounted at Root */}
      <EnquiryModal />
      <SearchModal />
      <UserModal />

    </div>
  );
}
