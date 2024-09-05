import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-8">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">BIKESETU</h2>
          <p className="mb-4">
            Proudly Contributing to India's E-Mobility Adoption Mission 2030! <br />
            BIKESETU is a Multi Brand Electric 2W Sales & Distribution Platform. <br />
            BIKESETU is Franchisee Based Business model focused on Tier 2,3,4 cities. <br />
            BIKESETU is Single Window Buying Platform & Buying Guide for buyers.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-1/4 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fas fa-times fa-lg"></i>
            </a>
          </div>
          <p className="text-sm">
            Setu Autotech Pvt Ltd <br />
            CIN: U74909RJ2023PTC08870
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-teal-800 mt-6 pt-4 text-center text-sm">
        &copy; 2024 <a href="#" className="hover:underline">BIKESETU</a>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
