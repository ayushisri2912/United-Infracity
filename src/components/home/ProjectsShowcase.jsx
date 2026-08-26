import React from 'react';
import { MapPin, Building, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function ProjectsShowcase() {
  const navigate = useNavigate();
  const {
    openEnquire,
    activeProjectFilter,
    setActiveProjectFilter,
    selectedCity,
    selectedConfig
  } = useModal();

  const projects = [
    {
      id: 1,
      title: 'United Orchid Heights',
      category: 'Residential',
      location: 'Sector 6, Vrindavan Yojna Phase-1, Lucknow',
      config: '2, 3 BHK & 3 BHK + Study',
      status: 'RERA Registered / New Launch',
      price: 'Pos. FY 2031-32 (June 31)',
      image: '/images/hero_luxury_tower.jpg',
      badge: 'FLAGSHIP RESIDENTIAL',
      path: '/projects/residential'
    },
    {
      id: 2,
      title: 'Aura Business Tower',
      category: 'Commercial',
      location: 'Central Corporate Hub',
      config: 'Grade-A Office & High-Street Retail',
      status: 'Under Construction',
      price: '₹ 1.25 Cr Onwards',
      image: '/images/aura_tower_facade.jpg',
      badge: 'ASSURED RENTAL RETURN',
      path: '/projects/commercial'
    },
    {
      id: 3,
      title: 'United Imperial Township',
      category: 'Township',
      location: 'Expressway Tech Corridor',
      config: 'Bespoke Luxury Villas & Plots',
      status: 'Under Construction',
      price: '₹ 3.50 Cr Onwards',
      image: '/images/hero_luxury_tower.jpg',
      badge: '150-ACRE ECOSYSTEM',
      path: '/projects/township'
    },
    {
      id: 4,
      title: 'United Commercial Square',
      category: 'Commercial',
      location: 'Financial District Sector 62',
      config: 'Boutique Offices & Gourmet Food Court',
      status: 'New Launch',
      price: '₹ 85 Lakhs Onwards',
      image: '/images/test-img6.jpg',
      badge: 'PRIME FOOTFALL LOCATION',
      path: '/projects/commercial'
    },
    {
      id: 5,
      title: 'The Sovereign Estates',
      category: 'Completed',
      location: 'VVIP Enclave',
      config: '5 BHK Independent Villas',
      status: 'Completed & Delivered',
      price: '₹ 6.20 Cr Onwards',
      image: '/images/test-img2.jpg',
      badge: 'READY TO MOVE IN',
      path: '/projects/completed'
    },
    {
      id: 6,
      title: 'State Administrative Complex',
      category: 'Government',
      location: 'Capital Administrative Sector',
      config: 'Administrative Headquarters',
      status: 'Completed & Handed Over',
      price: 'Government Infrastructure',
      image: '/images/test-img5.jpg',
      badge: 'PUBLIC INFRASTRUCTURE',
      path: '/projects/government'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Township', 'Completed', 'Government'];

  const filteredProjects = projects.filter((project) => {
    const matchCategory = activeProjectFilter === 'All' || project.category === activeProjectFilter;
    const matchCity = selectedCity === 'All' || project.location === selectedCity;
    const matchConfig = selectedConfig === 'All' || project.config === selectedConfig;
    return matchCategory && matchCity && matchConfig;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] border border-[#D4AF37]/20 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              Explore Our <span className="text-[#D4AF37] italic font-serif">Flagship Developments</span>
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-light max-w-xl">
              Discover luxury residences, grade-A commercial hubs, and township ecosystems crafted with uncompromised engineering standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeProjectFilter === cat
                    ? 'bg-[#D4AF37] text-stone-950 shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 shadow-xs space-y-3">
            <p className="text-stone-500 text-sm font-medium">
              No matching projects found for the selected filters.
            </p>
            <button
              onClick={() => {
                setActiveProjectFilter('All');
              }}
              className="text-[#997B20] text-xs font-bold uppercase tracking-widest underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 bg-stone-900/80 backdrop-blur-md text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest rounded-full border border-[#D4AF37]/40">
                      {project.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] block">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-stone-600 font-light">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-stone-600 font-light">
                      <Building className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{project.config}</span>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Starting Price</span>
                        <span className="font-serif text-lg font-bold text-stone-900">{project.price}</span>
                      </div>

                      <span className="px-2.5 py-1 bg-stone-100 text-stone-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-stone-200">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      navigate(project.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-stone-950 text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={openEnquire}
                    className="px-4 py-3 bg-[#FAF8F5] hover:bg-stone-200 text-[#997B20] text-[11px] font-bold uppercase tracking-widest rounded-xl border border-[#D4AF37]/30 transition-colors cursor-pointer"
                    title="Enquire Site Visit"
                  >
                    Enquire
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
