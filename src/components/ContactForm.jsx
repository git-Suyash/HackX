import React from 'react';

const BikeSetuForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 border border-teal-500 max-w-5xl w-full">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Why BIKESETU!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Unbiased Buying Advice */}
            <div className="flex items-start space-x-4">
              <img
                src="/images/unbiased-advice.png" // Replace with the actual image path
                alt="Unbiased Buying Advice"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Unbiased Buying Advice
                </h3>
                <p className="text-gray-600">
                  Confused Which Electric Scooter To Buy? We Understand Your
                  Needs And Help You To Find The Right Electric Scooter For You.
                </p>
              </div>
            </div>

            {/* Lowest Price Guaranteed */}
            <div className="flex items-start space-x-4">
              <img
                src="/images/best-deal.png" // Replace with the actual image path
                alt="Lowest Price Guaranteed"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Lowest Price Guaranteed
                </h3>
                <p className="text-gray-600">
                  You Can Save Upto ₹30000/- With BIKESETU On Your Electric
                  Scooter Purchase.
                </p>
              </div>
            </div>

            {/* Assistance in Finance */}
            <div className="flex items-start space-x-4">
              <img
                src="/images/finance-assistance.png" // Replace with the actual image path
                alt="Assistance in Finance"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Assistance In Finance
                </h3>
                <p className="text-gray-600">
                  We Provide Easy Finance Options Through Our Trusted Partners.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-500">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-teal-500 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-teal-500 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City*
                </label>
                <select
                  id="city"
                  className="mt-1 block w-full px-3 py-2 border border-teal-500 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  <option value="">Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  GET DEALS NOW!!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeSetuForm;
