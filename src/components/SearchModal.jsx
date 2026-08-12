import React, { useState } from 'react';
import { Search, X, MapPin, Building, ArrowUpRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectProject }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const sampleSearchableProjects = [
    { title: 'United Grand Residences', category: 'Residential', location: 'Golf Course Extension' },
    { title: 'Aura Business Tower', category: 'Commercial', location: 'Central Corporate Hub' },
    { title: 'United Imperial Township', category: 'Township', location: 'Expressway Tech Corridor' },
    { title: 'United Commercial Square', category: 'Commercial', location: 'Financial District Sector 62' },
    { title: 'The Sovereign Estates', category: 'Completed', location: 'VVIP Enclave' },
  ];

  const results = query.trim() === ''
    ? sampleSearchableProjects
    : sampleSearchableProjects.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FDFBF7] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/40">
        
        {/* Search Header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#D4AF37]" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects by name, location (e.g. Aura Tower, Golf Course, Commercial)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-stone-800 text-sm font-medium"
          />
          <button onClick={onClose} className="p-1 rounded-full text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {results.length === 0 ? (
            <p className="text-stone-500 text-xs text-center py-8">
              No matching projects found for "{query}". Try searching "Residential" or "Aura".
            </p>
          ) : (
            results.map((project, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectProject(project.category);
                  onClose();
                }}
                className="p-3 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-between cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Building className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" /> {project.location}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold text-[#997B20] px-2.5 py-1 bg-[#FDFBF7] rounded-full border border-[#D4AF37]/30">
                  {project.category}
                </span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
