import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "EvoStudios Store 1",
      category: "Standard Store",
      url: "https://evostudios1.myshopify.com/",
      password: "EVO",
      image: "Modern Shopify store with clean design and product showcase"
    },
    {
      title: "EvoStudios Store 2", 
      category: "Standard Store",
      url: "https://evostudios2.myshopify.com/",
      password: "EVO",
      image: "Elegant e-commerce store with professional layout"
    },
    {
      title: "EvoStudios Store 6",
      category: "Standard Store", 
      url: "https://evostudios6.myshopify.com/",
      password: "EVO",
      image: "Responsive Shopify store with mobile-first design"
    },
    {
      title: "EvoStudios Store 4",
      category: "Professional Store",
      url: "https://evostudios4.myshopify.com/",
      password: "EVO",
      image: "Premium e-commerce store with advanced features"
    },
    {
      title: "EvoStudios Store 5",
      category: "Professional Store",
      url: "https://evostudios5.myshopify.com/",
      password: "EVO",
      image: "Conversion-optimized store with seamless user experience"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my collection of successful Shopify stores across different industries and business sizes
          </p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>Demo Access:</strong> All stores use password: <span className="font-mono font-bold">EVO</span>
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img  
                  alt={`${item.title} - Shopify store screenshot`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">Password: EVO</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                
                <Button
                  className="w-full bg-black text-white hover:bg-gray-800 group"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  Check Demo Store
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;