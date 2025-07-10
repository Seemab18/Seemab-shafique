import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "Seemabshafique31@gmail.com",
      action: () => window.open('mailto:Seemabshafique31@gmail.com', '_blank')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "WhatsApp",
      value: "+92 336 8834738",
      action: () => window.open('https://wa.me/923368834738', '_blank')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Range Road, Rawalpindi",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      url: "https://horizons.hostinger.com/842a70a4-7de6-4eaf-ac85-b11de6cbc1e5?location=hpanel"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your e-commerce vision into reality? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm ${
                      info.action ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
                    }`}
                    onClick={info.action}
                  >
                    <div className="text-black">{info.icon}</div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3">Quick Response Guarantee</h4>
              <p className="text-gray-600 mb-4">
                I typically respond to all inquiries within 2-4 hours during business hours. For urgent projects, WhatsApp is the fastest way to reach me.
              </p>
              <Button 
                className="bg-green-600 text-white hover:bg-green-700"
                onClick={() => window.open('https://wa.me/923368834738', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                  <option>Custom Shopify Development</option>
                  <option>Store Design & Redesign</option>
                  <option>Mobile Optimization</option>
                  <option>SEO & Performance</option>
                  <option>Digital Marketing</option>
                  <option>Email Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                  <option>$200 - $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                  <option>ASAP (Rush Job)</option>
                  <option>1-2 weeks</option>
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>

              <Button 
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={() => window.open('https://wa.me/923368834738', '_blank')}
              >
                Send Project Details via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;