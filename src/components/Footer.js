import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo size="default" variant="dark" className="mb-6" />
            <p className="text-gray-400 mt-4 leading-relaxed font-normal">
              Modern web development solutions with clean design and secure backend. Building the future of digital experiences.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-tight text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 font-normal">
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Services
                </button>
              </li>
              <li><Link to="/our-work" className="hover:text-blue-400 transition inline-block transform hover:translate-x-1">Our Work</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition inline-block transform hover:translate-x-1">Blog</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition inline-block transform hover:translate-x-1">About Us</Link></li>
              <li><Link to="/lets-talk" className="hover:text-blue-400 transition inline-block transform hover:translate-x-1">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-tight text-white">Services</h4>
            <ul className="space-y-3 text-gray-400 font-normal">
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Frontend Development
                </button>
              </li>
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Backend Development
                </button>
              </li>
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Full Stack Solutions
                </button>
              </li>
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Admin Panel
                </button>
              </li>
              <li>
                <button onClick={handleServicesClick} className="hover:text-blue-400 transition inline-block transform hover:translate-x-1 text-left">
                  Mobile Apps
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-tight text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-normal">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:umeshkatariya648@gmail.com" className="hover:text-blue-400 transition">umeshkatariya648@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition">+91 9023345747</a>
              </li>
              <li className="pt-4">
                <Link 
                  to="/lets-talk" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Let's Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-normal">
              &copy; {new Date().getFullYear()} TrueAxis IT Solution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button onClick={() => {}} className="hover:text-blue-400 transition" aria-label="Privacy Policy">Privacy Policy</button>
              <button onClick={() => {}} className="hover:text-blue-400 transition" aria-label="Terms of Service">Terms of Service</button>
              <button onClick={() => {}} className="hover:text-blue-400 transition" aria-label="Cookie Policy">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
