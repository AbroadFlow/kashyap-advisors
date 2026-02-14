"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";




export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/kasyap_advisors.png"
                alt="Kashyap Advisors Logo"
                className="h-22 w-22 rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight text-blue-900">
                <span className="block">Kashyap</span>
                <span className="block">Advisors</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#countries"
              className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Countries
            </a>
            <a
              href="#testimonials"
              className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
            {/* <a
              href="#about"
              className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </a> */}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-blue-100">
              <a
                href="#home"
                className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a
                href="#countries"
                className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMobileMenu}
              >
                Countries
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMobileMenu}
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMobileMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block mx-3 my-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg text-center font-medium"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
