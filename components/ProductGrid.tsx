import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

interface ProductGridProps {
  title: string;
  subtitle: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle }) => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          {title}. <span className="text-gray-400 font-normal">{subtitle}</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;