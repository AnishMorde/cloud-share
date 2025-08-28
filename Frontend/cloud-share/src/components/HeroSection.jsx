import React from "react";
import { assets } from "../assets/assests";
function HeroSection() {
  return (
    <div className="landing-page-content relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 -z-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Share file securely with </span>
              <span className="block text-purple-500">CloudShare</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Upload, manage, and share your files securely. Accessible
              anywhere, anytime.
            </p>

            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:items-center">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
                <button className="flex items-center px-6 py-3 border border-transparent text-white font-medium rounded-md bg-purple-500 hover:bg-purple-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get started
                </button>

                <button className="flex items-center px-6 py-3 border border-transparent text-purple-600 font-medium rounded-md bg-white hover:bg-purple-500 hover:text-white md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sign In
                </button>
              </div>
            </div>

            <div className="relative mt-10 " >
               <div className="aspect-w-16 rounded-lg shadow-xl overflow-hidden  ">
                <img src={assets.dashboard} alt="cloudshare dashboard" className="w-full h-full object-cover " />
               </div>

               <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10 rounded-lg " ></div>
            </div>

            <div className="mt-8 text-center " >
              <p className="mt-4 text-base text-gray-500" >
                All your file are encrypted and stored securely with enterprise-grade security protocol
              </p>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
