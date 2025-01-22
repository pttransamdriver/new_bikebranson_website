import React, { useState } from 'react';
import RentalCard from '../components/RentalCard';
import BookingCalendar from '../components/BookingCalendar';

const Rentals = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tableRockTrailOption = {
    title: "Table Rock Lake Trail Experience",
    description: "A scenic 1.5-hour guided ride on the beautiful Table Rock Lake Trail, starting right across from our shop.",
    features: [
      "Easy access to Table Rock Lake Trail across the street",
      "1.5 hour approximate duration",
      "Guided route recommendations",
      "Helmets and safety gear included",
      "Beautiful lake and forest views"
    ],
    pricing: [
      "Lectric XP Lite: $45",
      "RAD Powerbike: $52",
      "Lectric XP 3.0: $60"
    ]
  };

  const dayRentalOption = {
    title: "Day Rental Adventure",
    description: "Take our foldable Lectric e-bikes anywhere in the Branson area. Perfect for exploring destinations like Dogwood Canyon.",
    features: [
      "Foldable Lectric e-bikes for easy transport",
      "Fits in most car trunks",
      "Full-day rental flexibility",
      "Perfect for Dogwood Canyon visits",
      "Helmets and safety gear included"
    ],
    pricing: [
      "Lectric XP Lite: $89/day",
      "Lectric XP 3.0: $128/day"
    ]
  };

  const bikeOptions = [
    {
      title: "Lectric XP Lite",
      description: "A lightweight, foldable e-bike perfect for easy transportation and storage.",
      features: [
        "Foldable design",
        "Lightweight frame",
        "Perfect for beginners",
        "Trail Rate: $45",
        "Day Rate: $89"
      ],
      image: "/images/Lectric-XP-Lite.jpg"
    },
    {
      title: "RAD Powerbike",
      description: "A powerful and comfortable e-bike ideal for trail adventures.",
      features: [
        "Premium comfort",
        "Extended battery life",
        "Perfect for trails",
        "Trail Rate: $52",
        "Trail rentals only"
      ],
      image: "/images/RAD-Powerbike.jpg"
    },
    {
      title: "Lectric XP 3.0",
      description: "Our most advanced foldable e-bike with enhanced features and comfort.",
      features: [
        "Advanced foldable design",
        "Enhanced comfort features",
        "Perfect for all-day rides",
        "Trail Rate: $60",
        "Day Rate: $128"
      ],
      image: "/images/Lectric-XP-3.0.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-800">
        <img 
          src="/images/Bikes_ruins.jpg"
          alt="E-bikes at scenic location"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            E-Bike Rentals
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showBookingForm ? (
          <>
            {/* Rental Types Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-black mb-8 text-center">Choose Your Adventure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-orange mb-4">{tableRockTrailOption.title}</h3>
                    <p className="text-gray-600 mb-4">{tableRockTrailOption.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tableRockTrailOption.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold text-brand-black mb-2">Pricing:</h4>
                      <ul className="space-y-1">
                        {tableRockTrailOption.pricing.map((price, index) => (
                          <li key={index} className="text-gray-600">
                            {price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-orange mb-4">{dayRentalOption.title}</h3>
                    <p className="text-gray-600 mb-4">{dayRentalOption.description}</p>
                    <ul className="space-y-2 mb-6">
                      {dayRentalOption.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold text-brand-black mb-2">Pricing:</h4>
                      <ul className="space-y-1">
                        {dayRentalOption.pricing.map((price, index) => (
                          <li key={index} className="text-gray-600">
                            {price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Bikes Section */}
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-8 text-center">Our E-Bikes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {bikeOptions.map((bike, index) => (
                  <RentalCard
                    key={index}
                    {...bike}
                  />
                ))}
              </div>
            </div>

            {/* Book Now Button */}
            <div className="text-center">
              <button
                onClick={() => setShowBookingForm(true)}
                className="bg-brand-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => setShowBookingForm(false)}
              className="mb-6 text-brand-orange hover:text-orange-600 font-medium flex items-center"
            >
              ← Back to rental options
            </button>
            <BookingCalendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentals;