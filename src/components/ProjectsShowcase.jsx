import React, { useState } from 'react';
import { MapPin, ArrowUpRight, BedDouble, Maximize2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function ProjectsShowcase({
  onOpenEnquire,
  activeFilter = 'All',
  setActiveFilter,
  selectedCity = 'All',
  selectedConfig = 'All'
}) {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const filterTabs = [
    { name: 'All Projects', value: 'All' },
    { name: 'Ongoing Residential', value: 'Residential' },
    { name: 'Ongoing Commercial', value: 'Commercial' },
    { name: 'United Township', value: 'Township' },
    { name: 'Completed Projects', value: 'Completed' },
    { name: 'Government Projects', value: 'Government' },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'United Grand Residences',
      category: 'Residential',
      categoryLabel: 'Ongoing Residential',
      location: 'Golf Course Extension, Prime Sector',
      price: 'Starting ₹1.85 Cr*',
      specs: '3 & 4 BHK Luxury Condos',
      area: '2,400 - 3,800 Sq. Ft.',
      image: '/images/united_residences.jpg',
      status: 'Under Construction',
      tag: 'Luxury Living',
      description: 'Ultra-luxurious high-rise residences featuring private elevator access, rooftop infinity pool, and panoramic skyline views.'
    },
    {
      id: 2,
      title: 'Aura Business Tower',
      category: 'Commercial',
      categoryLabel: 'Ongoing Commercial',
      location: 'Central Corporate Hub',
      price: 'Starting ₹95 Lacs*',
      specs: 'Grade-A Office & High-Street Retail',
      area: '850 - 12,000 Sq. Ft.',
      image: '/images/aura_tower_facade.jpg',
      status: 'Pre-Leased Offices',
      tag: 'Commercial Hub',
      description: 'Futuristic commercial icon with double-height glass lobbies, LEED gold certification, and automated multi-tier parking.'
    },
    {
      id: 3,
      title: 'United Imperial Township',
      category: 'Township',
      categoryLabel: 'United Township',
      location: 'Expressway Tech Corridor',
      price: 'Starting ₹2.50 Cr*',
      specs: 'Bespoke Luxury Villas & Plots',
      area: '150 Acres Integrated Township',
      image: '/images/hero_luxury_tower.jpg',
      status: 'Booking Open',
      tag: 'Flagship Township',
      description: 'Spread over 150 acres, featuring a 5-star clubhouse, international sports complex, private lake, and 70% open green space.'
    },
    {
      id: 4,
      title: 'United Commercial Square',
      category: 'Commercial',
      categoryLabel: 'Ongoing Commercial',
      location: 'Financial District Sector 62',
      price: 'Starting ₹1.20 Cr*',
      specs: 'Boutique Offices & Gourmet Food Court',
      area: '1,200 - 5,000 Sq. Ft.',
      image: '/images/united_commercial.jpg',
      status: 'Near Possession',
      tag: 'High ROI',
      description: 'Premium retail high-street and Grade-A office suites with high footfall catchment and tech-enabled workspace amenities.'
    },
    {
      id: 5,
      title: 'The Sovereign Estates',
      category: 'Completed',
      categoryLabel: 'Completed Projects',
      location: 'VVIP Enclave',
      price: 'Sold Out',
      specs: '5 BHK Independent Villas',
      area: '5,500 Sq. Ft.',
      image: '/images/united_residences.jpg',
      status: 'Delivered 2024',
      tag: 'Delivered Landmark',
      description: 'Delivered ahead of schedule, setting the gold standard in private villa luxury with private plunge pools and manicured lawns.'
    },
    {
      id: 6,
      title: 'State Infrastructure Complex',
      category: 'Government',
      categoryLabel: 'Government Projects',
      location: 'Capital Administrative Sector',
      price: 'Govt. Contract Landmark',
      specs: 'Administrative Headquarters',
      area: '10 Lakh Sq. Ft.',
      image: '/images/aura_tower_facade.jpg',
      status: 'Completed',
      tag: 'Civic Excellence',
      description: 'Pioneering government infrastructure building constructed with seismic resistance and state-of-the-art energy efficiency.'
    }
  ];

  const filteredProjects = projectsData.filter((p) => {
    const matchCategory = activeFilter === 'All' || p.category === activeFilter;
    const matchCity = selectedCity === 'All' || p.location.toLowerCase().includes(selectedCity.toLowerCase());
    const matchConfig = selectedConfig === 'All' || p.specs.toLowerCase().includes(selectedConfig.toLowerCase());
    return matchCategory && matchCity && matchConfig;
  });

  return (
    <section id="projects" className="py-10 lg:py-14 bg-[#FDFBF7] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A]">
            Architectural Excellence in <span className="text-[#D4AF37] italic font-serif">Every Square Foot</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light">
            Explore our portfolio of ongoing residential sanctuaries, Grade-A commercial hubs, and mega township developments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full whitespace-nowrap transition-all duration-300 ${
                activeFilter === tab.value
                  ? 'bg-[#1A1A1A] text-[#D4AF37] shadow-md scale-105'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-[#D4AF37] font-bold text-[9px] uppercase tracking-wider rounded-full border border-[#D4AF37]/30">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-md text-stone-800 font-semibold text-[9px] uppercase tracking-wider rounded-full shadow-sm">
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-stone-300 mb-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-2 py-2 border-y border-stone-100 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Type</span>
                    <span className="font-semibold text-stone-800 text-[11px]">{project.specs}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Area</span>
                    <span className="font-semibold text-stone-800 text-[11px]">{project.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[9px] text-stone-400 uppercase tracking-widest block">Investment</span>
                    <span className="font-serif font-bold text-sm text-[#D4AF37]">
                      {project.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FDFBF7] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white border border-[#D4AF37]/30 rounded-lg text-xs font-semibold transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D4AF37]/30 relative">
            <div className="relative h-64">
              <img
                src={selectedProjectModal.image}
                alt={selectedProjectModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black"
              >
                ✕
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                  {selectedProjectModal.categoryLabel}
                </span>
                <h3 className="font-serif font-bold text-3xl text-[#1A1A1A] mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {selectedProjectModal.location}
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedProjectModal.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-stone-200 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Specifications</span>
                  <span className="font-bold text-stone-800">{selectedProjectModal.specs}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Carpet Area</span>
                  <span className="font-bold text-stone-800">{selectedProjectModal.area}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Status</span>
                  <span className="font-bold text-[#D4AF37]">{selectedProjectModal.status}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <span className="font-serif font-bold text-2xl text-[#1A1A1A]">
                  {selectedProjectModal.price}
                </span>
                <button
                  onClick={() => {
                    setSelectedProjectModal(null);
                    onOpenEnquire();
                  }}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F24] text-white font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
