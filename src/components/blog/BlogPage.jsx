import React, { useState, useEffect } from 'react';
import BlogHeroBanner from './BlogHeroBanner';
import FeaturedArticleSection from './FeaturedArticleSection';
import PopularTopicsSection from './PopularTopicsSection';
import LatestArticlesSection from './LatestArticlesSection';
import NewsletterCtaSection from './NewsletterCtaSection';
import ArticleDetailModal from './ArticleDetailModal';
import { ArrowUp } from 'lucide-react';

export default function BlogPage({ onOpenEnquire, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const categories = [
    'All',
    'Luxury Homes',
    'Investment',
    'Architecture',
    'Construction',
    'Township',
    'Commercial',
    'Infrastructure',
    'Lifestyle'
  ];

  const featuredArticle = {
    id: 'featured-1',
    title: 'The Architectural Future of Gated Townships: Blending Sustainability with High-End Opulence',
    category: 'Township',
    date: 'August 10, 2026',
    readTime: '7 min read',
    excerpt: 'Exploring how next-generation smart infrastructure, private green belts, and zero-carbon building materials are redefining luxury living across modern Indian metropolitan corridors.',
    author: 'Anand V. Singhania',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop'
  };

  const blogArticles = [
    {
      id: 'blog-1',
      title: 'Why Real Estate Assets Remain the Strongest Hedges for Ultra High-Net-Worth Portfolios',
      category: 'Investment',
      date: 'August 05, 2026',
      readTime: '5 min read',
      excerpt: 'An analysis of capital growth trajectories, rental yields, and wealth preservation through Grade-A commercial towers and prime luxury residences.',
      author: 'Rajesh Malhotra',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-2',
      title: 'Biophilic Interior Architecture: Bringing Nature into Ultra-Luxury Sky Villas',
      category: 'Architecture',
      date: 'July 28, 2026',
      readTime: '6 min read',
      excerpt: 'Discover how double-height indoor gardens, dynamic natural lighting cascades, and organic stone finishes enhance wellness and cognitive calm in urban residences.',
      author: 'Priya Nambiar',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-3',
      title: 'Grade-A Commercial Workspaces: Defining Corporate Prestige in 2026',
      category: 'Commercial',
      date: 'July 21, 2026',
      readTime: '4 min read',
      excerpt: 'How modern business parks with LEED Gold certification, smart access control, and sky lounges are attracting Fortune 500 enterprises.',
      author: 'Vikramaditya Oberoi',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-4',
      title: 'Engineering Timeless Structures: Seismic Safety & Advanced Post-Tensioned Concrete',
      category: 'Construction',
      date: 'July 14, 2026',
      readTime: '8 min read',
      excerpt: 'A deep technical dive into structural engineering innovations ensuring 100+ year durability for high-rise towers and luxury mansard roofs.',
      author: 'Dr. Kabir Mehta',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-5',
      title: 'The Rise of Private Concierge & Clubhouse Amenities in Luxury Condominiums',
      category: 'Lifestyle',
      date: 'July 02, 2026',
      readTime: '5 min read',
      excerpt: 'From private temperature-controlled infinity pools to Michelin-star private dining rooms: what today’s elite homeowners expect.',
      author: 'Sunita Verma',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-6',
      title: 'Smart Transit Infrastructure: How Expressways & Metro Extensions Drive Suburban Property Values',
      category: 'Infrastructure',
      date: 'June 25, 2026',
      readTime: '6 min read',
      excerpt: 'Examining the economic ripple effects of regional rapid transit lines on suburban luxury townships and integrated commercial hubs.',
      author: 'Arvind Roy',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'blog-7',
      title: 'Designing Multigenerational Estates: Spatial Privacy Meets Family Togetherness',
      category: 'Luxury Homes',
      date: 'June 18, 2026',
      readTime: '7 min read',
      excerpt: 'Floor plan strategies that seamlessly balance independent guest wings, private master suites, and expansive communal garden terraces.',
      author: 'Anand V. Singhania',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredArticles = activeCategory === 'All'
    ? blogArticles
    : blogArticles.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1C1A] font-montserrat antialiased selection:bg-[#C6A15B] selection:text-white relative">
      
      {/* 1. HERO BANNER */}
      <BlogHeroBanner />

      {/* 2. FEATURED ARTICLE SECTION */}
      <FeaturedArticleSection 
        featuredArticle={featuredArticle} 
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 3. POPULAR TOPICS CATEGORY FILTER */}
      <PopularTopicsSection 
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* 4. LATEST ARTICLES GRID */}
      <LatestArticlesSection 
        articles={filteredArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 5. NEWSLETTER CTA SECTION */}
      <NewsletterCtaSection />

      {/* ARTICLE DETAIL MODAL */}
      <ArticleDetailModal
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        article={selectedArticle}
      />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#1C1C1A] border border-[#C6A15B]/50 text-[#C6A15B] shadow-2xl flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#1C1C1A] hover:border-[#C6A15B] transition-all duration-300 hover:scale-110 cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
