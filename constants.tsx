import React from 'react';
import { Truck, RotateCcw, Globe, ShieldCheck } from 'lucide-react';
import { Product, CategoryCard, Feature } from './types';

export const FEATURES: Feature[] = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free shipping",
    description: "On orders over $50.00"
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Very easy to return",
    description: "Just phone number"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Worldwide delivery",
    description: "Fast delivery worldwide"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Refunds policy",
    description: "60 days return for any reason"
  }
];

export const CATEGORIES: CategoryCard[] = [
  {
    title: "For Men's",
    subtitle: "Starting at $24",
    link: "/men"
  },
  {
    title: "For Women's",
    subtitle: "Starting at $19",
    link: "/women"
  },
  {
    title: "Accessories",
    subtitle: "Explore accessories",
    link: "/accessories"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Black Automatic Watch",
    category: "Accessories",
    price: 169.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 98,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "2",
    name: "Silver Chronograph",
    category: "Accessories",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 124,
    imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "3",
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 49.99,
    originalPrice: 65.00,
    rating: 4.7,
    reviews: 56,
    imageUrl: "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "4",
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 129.99,
    originalPrice: 150.00,
    rating: 4.9,
    reviews: 82,
    imageUrl: "https://images.unsplash.com/photo-1511499767390-91f896299737?auto=format&fit=crop&q=80&w=400"
  }
];