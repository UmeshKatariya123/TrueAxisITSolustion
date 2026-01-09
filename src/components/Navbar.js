import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoLight from '../assets/images/logo-light.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

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
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {/* <img
                src={logoLight}
                alt="TrueAxis IT Solution"
                className="h-12 w-auto"
              /> */}
              <img
                src={logoLight}
                alt="TrueAxis IT Solution"
                className="h-14 md:h-40 lg:h-18 w-auto"
                style={{ maxHeight: '155px' }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link
              to="/"
              className={`${isActive('/') && location.pathname === '/' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} transition tracking-wide`}
            >
              Home
            </Link>
            <button
              onClick={handleServicesClick}
              className="text-gray-300 hover:text-blue-400 transition tracking-wide font-medium"
            >
              Services
            </button>
            <Link
              to="/our-work"
              className={`${isActive('/our-work') ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} transition tracking-wide`}
            >
              Our Work
            </Link>
            <Link
              to="/blog"
              className={`${isActive('/blog') ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} transition tracking-wide`}
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className={`${isActive('/about-us') ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} transition tracking-wide`}
            >
              About Us
            </Link>
            <Link
              to="/lets-talk"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition tracking-wide"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={handleServicesClick}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
            >
              Services
            </button>
            <Link
              to="/our-work"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/lets-talk"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);

