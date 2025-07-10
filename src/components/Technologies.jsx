import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const categories = {
    "Platform & Development": ["Shopify", "Liquid", "Shopify CLI", "Git", "Node.js"],
    "Frontend & Design": ["HTML5", "CSS3", "JavaScript", "React", "Figma", "Adobe XD", "Photoshop"],
    "Marketing & Analytics": ["Facebook Ads", "Google Ads", "TikTok Ads", "Mailchimp", "Klaviyo", "Google Analytics", "Hotjar"],
    "Integrations": ["Shopify Apps"]
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technologies & Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and tools I use to deliver exceptional Shopify solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gray-100 px-4 py-2 rounded-full"
                    >
                      <span className="font-medium text-gray-700">{tool}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;