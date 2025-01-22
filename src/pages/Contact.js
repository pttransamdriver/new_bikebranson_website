import React from 'react';

const Contact = () => {
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
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brand-black font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-brand-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.5334690258843!2d-93.24775692427655!3d36.627512172104344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf01f77244cb91%3A0x98ca5dd963a7861d!2s5377%20Historic%20Hwy%20165%2C%20Branson%2C%20MO%2065616!5e0!3m2!1sen!2sus!4v1705707547943!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bike Branson Location"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">Address</h3>
                  <p className="text-gray-600">5377 Historic Hwy 165</p>
                  <p className="text-gray-600">Branson, Missouri 65616</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">Contact</h3>
                  <p className="text-gray-600">Phone: (417) 420-9373</p>
                  <p className="text-gray-600">Email: info@bikebranson.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9am - 6pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;