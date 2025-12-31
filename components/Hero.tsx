import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <p className="text-gray-500 font-medium mb-4">Starting from: $49.99</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Exclusive collection <br className="hidden md:block" /> for everyone
          </h1>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#0F172A] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black transition-all group">
              <span className="font-semibold">Explore now</span>
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          {/* Slider Indicators */}
          <div className="flex justify-center lg:justify-start gap-2 mt-12">
            <div className="w-8 h-1 bg-black rounded-full"></div>
            <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[600px] w-full">
           <div className="absolute inset-0 bg-[#E5E7EB] rounded-[60px] md:rounded-[120px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
                alt="Elite Collection"
                className="w-full h-full object-cover object-top"
              />
           </div>
           {/* Abstract Circle Design Element */}
           <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-white rounded-full opacity-50 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;