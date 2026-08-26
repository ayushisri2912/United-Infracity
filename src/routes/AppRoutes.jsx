import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';

import Home from '../pages/Home';

// Lazy-loaded sub-pages for route code splitting
const About = lazy(() => import('../pages/About'));
const Mentor = lazy(() => import('../pages/Mentor'));
const Management = lazy(() => import('../pages/Management'));
const ResidentialProjects = lazy(() => import('../pages/ResidentialProjects'));
const CommercialProjects = lazy(() => import('../pages/CommercialProjects'));
const TownshipProjects = lazy(() => import('../pages/TownshipProjects'));
const CompletedProjects = lazy(() => import('../pages/CompletedProjects'));
const GovernmentProjects = lazy(() => import('../pages/GovernmentProjects'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Blog = lazy(() => import('../pages/Blog'));
const NewsEvents = lazy(() => import('../pages/NewsEvents'));
const PressCoverage = lazy(() => import('../pages/PressCoverage'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/mentor" element={<Mentor />} />
          <Route path="about/management" element={<Management />} />
          <Route path="projects/residential" element={<ResidentialProjects />} />
          <Route path="projects/commercial" element={<CommercialProjects />} />
          <Route path="projects/township" element={<TownshipProjects />} />
          <Route path="projects/completed" element={<CompletedProjects />} />
          <Route path="projects/government" element={<GovernmentProjects />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news-events" element={<NewsEvents />} />
          <Route path="press-coverage" element={<PressCoverage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
