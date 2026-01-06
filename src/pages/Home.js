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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const [heroRes, servicesRes, featuresRes, testimonialsRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_URL}/content?category=hero`),
        axios.get(`${process.env.REACT_APP_API_URL}/content?category=service`),
        axios.get(`${process.env.REACT_APP_API_URL}/content?category=feature`),
        axios.get(`${process.env.REACT_APP_API_URL}/content?category=testimonial`)
      ]);

      if (heroRes.data.length > 0) {
        setHeroContent(heroRes.data[0]);
      }
      setServices(servicesRes.data);
      setFeatures(featuresRes.data);
      setTestimonials(testimonialsRes.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-blue-600 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero content={heroContent} />
      <Services services={services} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;

