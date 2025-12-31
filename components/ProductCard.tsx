import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F3F4F6] rounded-[32px] overflow-hidden mb-4">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-bold text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>
          <div className="text-right">
            <span className="block font-bold text-sm">${product.price.toFixed(2)}</span>
            <span className="block text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mt-2">
           <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
           <span className="text-xs font-bold">{product.rating}</span>
           <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;