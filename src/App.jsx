
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Helmet>
        <title>Seemab Shafique - Professional Shopify Developer & Designer</title>
        <meta name="description" content="Professional Shopify developer with 2+ years experience. Specializing in custom e-commerce stores, Liquid templating, and high-performance solutions. 50+ successful projects delivered." />
      </Helmet>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
