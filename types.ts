// Fix: Import React to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export interface CategoryCard {
  title: string;
  subtitle: string;
  link: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}