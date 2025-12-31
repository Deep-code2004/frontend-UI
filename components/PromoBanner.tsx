import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#F3F4F6] rounded-[60px] md:rounded-[100px] overflow-hidden flex flex-col md:flex-row items-center relative">
        <div className="p-12 md:p-20 md:w-1/2">
          <p className="text-gray-500 font-medium mb-4">100% Original Products</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The All New Fashion <br /> Collection Items
          </h2>
          <p className="text-gray-500 mb-10">Starting from: $59.99</p>
          <button className="bg-[#0F172A] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">
            Shop now
          </button>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-[600px] relative">
          <img 
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" 
            alt="Fashion Item"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;