import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Expert in Liquid templating and custom Shopify solutions"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization", 
      description: "Fast-loading stores with SEO best practices"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience",
      description: "Conversion-focused designs that drive sales"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing across all devices and browsers"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a Shopify developer with extensive 2 year experience, I specialize in creating customized, high-performance e-commerce stores that drive sales and enhance user experience. I have a deep understanding of Shopify's Liquid templating language, enabling me to build responsive, visually appealing themes tailored to brand identities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond front-end design, I'm proficient in integrating third-party apps and APIs to extend store functionality, streamline operations, and optimize checkout processes. My expertise also includes developing custom Shopify apps and automating workflows to meet unique business needs. Committed to best practices in SEO and site speed optimization, I ensure every store I build not only looks great but performs flawlessly across all devices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="text-black">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              alt="Seemab Shafique, professional Shopify developer"
              className="w-full rounded-2xl shadow-2xl hover-lift"
             src="https://storage.googleapis.com/hostinger-horizons-assets-prod/842a70a4-7de6-4eaf-ac85-b11de6cbc1e5/80b3901e7082bec3759537ac6be051b8.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
