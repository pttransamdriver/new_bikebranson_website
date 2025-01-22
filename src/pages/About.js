import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-800">
        <img 
          src="/api/placeholder/1200/400"
          alt="Nature background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            About Bike Branson
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-6">
              Your Adventure Starts Here
            </h2>
            <p className="text-gray-600 mb-6">
              Since our establishment, Bike Branson has been the premier destination for outdoor enthusiasts looking to explore the beautiful Ozarks on two wheels. We're passionate about providing high-quality bikes and exceptional service to help you create unforgettable memories in Branson.
            </p>
            <p className="text-gray-600">
              Whether you're an experienced cyclist or a casual rider, our team is dedicated to ensuring you have the perfect bike and route for your adventure. We pride ourselves on maintaining a fleet of well-serviced bikes and providing local expertise to enhance your riding experience.
            </p>
          </div>
          <div className="relative h-96">
            <img 
              src="/api/placeholder/600/400"
              alt="Bike shop"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Quality</h3>
            <p className="text-gray-600">
              We maintain the highest standards for our rental fleet, ensuring every bike is thoroughly inspected and serviced between rides.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Service</h3>
            <p className="text-gray-600">
              Our knowledgeable staff provides personalized service to help you choose the right bike and plan the perfect route.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Community</h3>
            <p className="text-gray-600">
              We're proud to be part of the Branson community and actively support local cycling initiatives and trail development.
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-brand-black mb-6">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-gray-600 mb-2">5377 Historic Hwy 165</p>
              <p className="text-gray-600 mb-2">Branson, Missouri 65616</p>
              <p className="text-gray-600">(417) 420-9373</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Saturday: 9am - 6pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;