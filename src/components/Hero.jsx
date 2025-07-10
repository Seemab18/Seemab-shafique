import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Professional
                <span className="block gradient-text">Shopify Developer</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 max-w-lg"
              >
                Transforming ideas into high-performance e-commerce stores with 2+ years of expertise and 50+ successful projects.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 group"
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white group"
                onClick={() => window.open('https://wa.me/923368834738', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-500"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-black">50+</div>
                <div>Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">2+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">100%</div>
                <div>Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  
                alt="Seemab Shafique - Professional Shopify Developer"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover-lift"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/842a70a4-7de6-4eaf-ac85-b11de6cbc1e5/0027dfd1825b9bb42e458ad2cb08ac9d.png" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gray-200 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/923368834738"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <MessageCircle size={24} className="mt-4" />
      </motion.a>
    </section>
  );
};

export default Hero;