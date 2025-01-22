import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] text-white">
        <div className="absolute inset-0">
          <img 
            src="/images/Bikes_ruins.jpg"
            alt="Bikes at ruins"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bike Branson at Table Rock Lake
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Enjoy the outdoors effortlessly!
            </p>
            <Link
              to="/rentals"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Bikes</h3>
              <p className="text-gray-600">
                Top-of-the-line bikes maintained to the highest standards
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Family Owned and Operated</h3>
              <p className="text-gray-600">
                Local knowledge and trail recommendations included
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Flexible Rentals</h3>
              <p className="text-gray-600">
                Hourly, daily, and weekly rental options available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready for an Adventure?</h2>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;