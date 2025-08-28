// Footer.jsx
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

function FooterSection() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900">CloudShare</h2>
            <p className="text-sm text-gray-600 mt-1">
              Secure and simple file sharing for teams & freelancers.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              About
            </a>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CloudShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
