import React, { useEffect, useState } from 'react';
import PressHeroBanner from '../components/press/PressHeroBanner';
import FeaturedCoverage from '../components/press/FeaturedCoverage';
import PressCoverageGrid from '../components/press/PressCoverageGrid';
import MediaRecognition from '../components/press/MediaRecognition';
import PressCTA from '../components/press/PressCTA';
import NewsDetailModal from '../components/news/NewsDetailModal';

export default function PressCoverage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] font-montserrat min-h-screen">
      
      {/* 1. Hero Banner */}
      <PressHeroBanner />

      {/* 2. Featured Coverage */}
      <FeaturedCoverage onSelectArticle={(art) => setSelectedArticle(art)} />

      {/* 3. Press Coverage Grid */}
      <PressCoverageGrid onSelectArticle={(art) => setSelectedArticle(art)} />

      {/* 4. Media Recognition */}
      <MediaRecognition />

      {/* 5. Call To Action */}
      <PressCTA />

      {/* Article Detail Modal */}
      {selectedArticle && (
        <NewsDetailModal
          selectedNews={{
            title: selectedArticle.headline || selectedArticle.title,
            category: selectedArticle.publication || selectedArticle.category,
            date: selectedArticle.date,
            image: selectedArticle.image,
            fullArticle: selectedArticle.excerpt,
            author: selectedArticle.publication
          }}
          onClose={() => setSelectedArticle(null)}
        />
      )}

    </div>
  );
}
