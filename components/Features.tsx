import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-white mt-8 mb-12 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4 px-4 py-2 group">
            <div className="text-gray-600 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
            {idx < FEATURES.length - 1 && (
               <div className="hidden lg:block h-8 w-[1px] bg-gray-200 ml-auto self-center"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;