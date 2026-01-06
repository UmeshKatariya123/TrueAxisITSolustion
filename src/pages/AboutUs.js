import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_URL = process.env.REACT_APP_API_URL || 'https://trueaxis-backend.onrender.com/api';

function AboutUs() {
  const [aboutContent, setAboutContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/content?category=about`);
      setAboutContent(response.data);
    } catch (error) {
      console.error('Error fetching about content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            We are a team of passionate designers and engineers who love technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-blue-600 text-xl">Loading...</div>
            </div>
          ) : (
            <div className="space-y-12">
              {aboutContent.length > 0 ? (
                aboutContent.map((content) => (
                  <div key={content._id} className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 tracking-tight">{content.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line font-normal">
                      {content.description}
                    </p>
                  </div>
                ))
              ) : (
                <>
                  {/* Default Content */}
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-6 tracking-tight">Who We Are</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4 font-normal">
                      TrueAxis IT Solution is a modern web development company specializing in creating 
                      high-performance websites and applications. We combine cutting-edge technology with 
                      clean design to deliver solutions that drive business growth.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-normal">
                      Our team consists of experienced developers, designers, and project managers who 
                      are passionate about creating exceptional digital experiences. We believe in 
                      building long-term relationships with our clients and delivering solutions that 
                      exceed expectations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="font-display text-4xl font-bold text-blue-600 mb-2">100+</div>
                      <div className="text-gray-700 font-semibold font-display">Projects Completed</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="font-display text-4xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-gray-700 font-semibold font-display">Happy Clients</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="font-display text-4xl font-bold text-blue-600 mb-2">5+</div>
                      <div className="text-gray-700 font-semibold font-display">Years Experience</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-normal">
                      To empower businesses with modern, scalable web solutions that drive growth and 
                      create exceptional user experiences. We strive to deliver clean code, beautiful 
                      designs, and secure systems that our clients can rely on.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2 tracking-tight">Quality First</h3>
                          <p className="text-gray-600 font-normal">We never compromise on quality and always deliver our best work.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2 tracking-tight">Client Focused</h3>
                          <p className="text-gray-600 font-normal">Your success is our success. We're committed to your goals.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2 tracking-tight">Innovation</h3>
                          <p className="text-gray-600 font-normal">We stay ahead with the latest technologies and best practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2 tracking-tight">Timely Delivery</h3>
                          <p className="text-gray-600 font-normal">We respect deadlines and deliver projects on time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;

