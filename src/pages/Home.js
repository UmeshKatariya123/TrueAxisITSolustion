import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const API_URL = process.env.REACT_APP_API_URL || 'https://trueaxis-backend.onrender.com/api';

function Home() {
  const [heroContent, setHeroContent] = useState(null);
  const [services, setServices] = useState([]);
  const [features, setFeatures] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    // Load all content in parallel
    const loadContent = async () => {
    try {
      const [heroRes, servicesRes, featuresRes, testimonialsRes] = await Promise.all([
          axios.get(`${API_URL}/content?category=hero`, { timeout: 10000 }),
          axios.get(`${API_URL}/content?category=service`, { timeout: 10000 }),
          axios.get(`${API_URL}/content?category=feature`, { timeout: 10000 }),
          axios.get(`${API_URL}/content?category=testimonial`, { timeout: 10000 })
      ]);

        if (heroRes.data && heroRes.data.length > 0) {
        setHeroContent(heroRes.data[0]);
      }
        setServices(servicesRes.data || []);
        setFeatures(featuresRes.data || []);
        setTestimonials(testimonialsRes.data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
        setServices([]);
        setFeatures([]);
        setTestimonials([]);
    } finally {
        setContentLoading(false);
    }
  };

    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero content={heroContent} />
      {!contentLoading ? (
        <>
      <Services services={services} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
        </>
      ) : (
        <div className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <CTA />
      <Footer />
    </div>
  );
}

export default React.memo(Home);

