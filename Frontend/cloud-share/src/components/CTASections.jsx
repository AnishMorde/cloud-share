import React from 'react'

function CTASections() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:text-left mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to get started?
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 mt-2">
              Create your account today.
            </p>
          </div>
          
          <div className="lg:ml-8">
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg text-base hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASections;
