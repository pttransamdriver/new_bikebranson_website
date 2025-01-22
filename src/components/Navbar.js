import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/BB_logo.png" 
                alt="Bike Branson Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/rentals" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">
              Rentals
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-orange focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/rentals"
              className="text-gray-700 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Rentals
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;