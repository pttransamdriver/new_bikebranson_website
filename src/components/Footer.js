import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <img 
                src="/images/BB_logo.png" 
                alt="Bike Branson Logo" 
                className="h-24 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 mt-4">
              Your premier destination for bike rentals in Branson. Experience the Ozarks on two wheels!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="text-gray-600 hover:text-brand-orange">
                  Rentals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-orange">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-black mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">5377 Historic Hwy 165</li>
              <li className="text-gray-600">Branson, Missouri 65616</li>
              <li className="text-gray-600">(417) 420-9373</li>
              <li className="text-gray-600">info@bikebranson.com</li>
              <li className="text-gray-600 mt-4">Hours:</li>
              <li className="text-gray-600">Monday - Saturday: 9am - 6pm</li>
              <li className="text-gray-600">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Bike Branson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;