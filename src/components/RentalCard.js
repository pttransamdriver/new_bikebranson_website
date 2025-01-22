import React from 'react';

const RentalCard = ({ title, description, features, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 bg-gray-200">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-brand-black mb-2">Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;