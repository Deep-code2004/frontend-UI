import React from 'react';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">ELITE</h2>
            <p className="text-gray-500 text-sm max-w-xs mb-8">
              Premium fashion and lifestyle destination for those who appreciate high-quality craftsmanship and exclusive designs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Github className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black">Men's Collection</a></li>
              <li><a href="#" className="hover:text-black">Women's Collection</a></li>
              <li><a href="#" className="hover:text-black">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Store Locator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black">Shipping Info</a></li>
              <li><a href="#" className="hover:text-black">Return Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 ELITE Store. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;