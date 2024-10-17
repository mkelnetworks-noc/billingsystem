import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row items-start justify-between md:space-x-12">
        
        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Details</h2>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Email:</strong> <a href="mailto:ogevevowe@gmail.com" className="text-blue-500 hover:underline">ogevevowe@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Phone:</strong> <a href="tel:+2347034552894" className="text-blue-500 hover:underline">07034552894</a>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Address:</strong> Living Faith Junction, Gidan Daya
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
