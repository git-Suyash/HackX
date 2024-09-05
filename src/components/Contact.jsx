import React from 'react';

const Contact = () => {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center pl-10 pr-10"
      style={{
        backgroundImage: 'url(/assets/still_have_questions.png)', // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Overlay for darkening the background */}
      
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have Question?</h2>
        <p className="text-gray-700 mb-4">
          Talk from the heart. Our friendly customer support team pays close attention to your
          problems and helps you select the right electric two-wheeler. Please contact us by phone, email, or callback request. We are available to assist you.
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-6">
          Expert Phone Number : <span className="font-bold">+91-9079825882</span>
        </p>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center space-x-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l2 2m0 0l3-3m-3 3V6a1 1 0 011-1h3m10 10l2 2m0 0l3-3m-3 3v-4a1 1 0 00-1-1h-3m-5 5a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
          <span>Talk to Sales Expert</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
