import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '2',
    bikeType: '',
    quantity: 1,
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-brand-black font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-brand-black font-medium mb-2">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-brand-black font-medium mb-2">
            Duration (hours)
          </label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          >
            <option value="2">2 Hours</option>
            <option value="4">4 Hours</option>
            <option value="8">Full Day (8 Hours)</option>
          </select>
        </div>

        <div>
          <label className="block text-brand-black font-medium mb-2">
            Bike Type
          </label>
          <select
            name="bikeType"
            value={formData.bikeType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          >
            <option value="">Select a bike type</option>
            <option value="mountain">Mountain Bike</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="electric">Electric Bike</option>
          </select>
        </div>

        <div>
          <label className="block text-brand-black font-medium mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            min="1"
            max="10"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-brand-black font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-brand-black font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-brand-black font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;