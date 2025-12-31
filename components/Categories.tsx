import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Start exploring. <span className="text-gray-400 font-normal">Good things are waiting for you</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] flex justify-between items-center group cursor-pointer hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div>
                <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{cat.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 font-medium text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                SHOP NOW
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;