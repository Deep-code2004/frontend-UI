import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <ProductGrid 
          title="Recommendations" 
          subtitle="Best matching products for you" 
        />
        <ProductGrid 
          title="Best Sellers" 
          subtitle="Best selling of the month" 
        />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;