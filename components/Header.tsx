import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">ELITE</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">Men</a>
          <a href="#" className="hover:text-black transition-colors">Women</a>
          <a href="#" className="hover:text-black transition-colors">Accessories</a>
          <a href="#" className="hover:text-black transition-colors">Blog</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="p-1 hover:text-gray-500 transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-gray-500 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-gray-500 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
          <button 
            className="md:hidden p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
          <a href="#" className="text-lg font-medium">Home</a>
          <a href="#" className="text-lg font-medium">Men</a>
          <a href="#" className="text-lg font-medium">Women</a>
          <a href="#" className="text-lg font-medium">Accessories</a>
          <a href="#" className="text-lg font-medium">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default Header;