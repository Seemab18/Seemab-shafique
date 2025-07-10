
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Palette, Smartphone, TrendingUp, Megaphone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Custom Shopify Development",
      description: "Complete e-commerce solutions with custom themes and functionality",
      price: "Starting from $200 USD",
      features: ["Custom Theme Development", "Liquid Templating", "App Integration", "Performance Optimization"]
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Store Design & Redesign",
      description: "Modern, conversion-focused designs that reflect your brand",
      price: "Starting from $250 USD",
      features: ["UI/UX Design", "Brand Integration", "Mobile Responsive", "Conversion Optimization"]
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Optimization",
      description: "Ensure your store performs perfectly on all devices",
      price: "Starting from $150 USD",
      features: ["Mobile-First Design", "Touch Optimization", "Speed Enhancement", "Cross-Device Testing"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "SEO & Performance",
      description: "Boost your store's visibility and loading speed",
      price: "Starting from $200 USD",
      features: ["Technical SEO", "Speed Optimization", "Core Web Vitals", "Analytics Setup"]
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: "Digital Marketing Campaigns",
      description: "Facebook, TikTok, and Google Ads management",
      price: "Starting from $300 USD",
      features: ["Facebook Ads", "TikTok Campaigns", "Google Ads", "Campaign Optimization"]
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Email Marketing",
      description: "Automated email sequences and newsletter campaigns",
      price: "Starting from $200 USD",
      features: ["Email Automation", "Newsletter Design", "Segmentation", "Performance Tracking"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Shopify solutions and digital marketing services to grow your e-commerce business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100"
            >
              <div className="text-black mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-black mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={() => window.open('https://wa.me/923368834738', '_blank')}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
