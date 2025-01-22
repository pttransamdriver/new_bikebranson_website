import React, { useState } from 'react';

const BikeInventory = {
  'Lectric XP Lite': 5,
  'RAD Powerbike': 4,
  'Lectric XP 3.0': 4
};

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedBike, setSelectedBike] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [rentalType, setRentalType] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    const bookingData = {
      date: selectedDate,
      bikeType: selectedBike,
      quantity,
      rentalType,
      customerInfo
    };
    console.log('Booking submitted:', bookingData);

    // You can add API call here to save the booking
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-brand-orange mb-6">Book Your E-Bike</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rental Type Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Rental Type
          </label>
          <select
            value={rentalType}
            onChange={(e) => setRentalType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          >
            <option value="">Select Rental Type</option>
            <option value="trail">Table Rock Lake Trail Experience</option>
            <option value="day">Day Rental Adventure</option>
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Date
          </label>
          <input
            type="date"
            min={today}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          />
        </div>

        {/* Bike Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Bike Model
          </label>
          <select
            value={selectedBike}
            onChange={(e) => setSelectedBike(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          >
            <option value="">Select a Bike</option>
            {Object.entries(BikeInventory).map(([bike, total]) => (
              <option key={bike} value={bike}>
                {bike} ({total} available)
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Number of Bikes
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            required
          >
            {selectedBike && [...Array(BikeInventory[selectedBike])].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'bike' : 'bikes'}
              </option>
            ))}
          </select>
        </div>

        {/* Customer Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingCalendar;