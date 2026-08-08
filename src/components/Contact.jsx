import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('whatsapp');

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto bg-charcoal-dark rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        
        {/* Floating warm particles background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-dark/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-leaf/20 blur-[100px] rounded-full mix-blend-screen" />
          
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-gold uppercase tracking-wider font-medium text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Let's start a premium conversation.
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Whether you're looking for bulk orders, have a query about our process, or simply want to say hello. Select your preferred method to reach us.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row bg-white/5 border border-white/10 p-1.5 rounded-3xl sm:rounded-full mb-12"
          >
            <button 
              onClick={() => setActiveTab('whatsapp')}
              className={`px-8 py-3 rounded-2xl sm:rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'whatsapp' ? 'bg-gold text-charcoal-dark shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
            <button 
              onClick={() => setActiveTab('phone')}
              className={`px-8 py-3 rounded-2xl sm:rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'phone' ? 'bg-gold text-charcoal-dark shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              <Phone size={18} />
              Phone
            </button>
            <button 
              onClick={() => setActiveTab('email')}
              className={`px-8 py-3 rounded-2xl sm:rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'email' ? 'bg-gold text-charcoal-dark shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              <Mail size={18} />
              Email Our Team
            </button>
          </motion.div>

          {/* Cards Area */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {activeTab === 'whatsapp' ? (
                <motion.div 
                  key="whatsapp"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <MessageCircle size={32} className="text-gold" />
                  </div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">Message Us Directly</p>
                  <p className="text-white font-display text-3xl font-bold mb-8">+91 9685196192</p>
                  <a 
                    href="https://wa.me/919685196192" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center h-14 gap-2 group bg-gold hover:bg-gold-light text-charcoal-dark rounded-full font-bold tracking-wider text-xs uppercase px-10 w-full transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </motion.div>
              ) : activeTab === 'phone' ? (
                <motion.div 
                  key="phone"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Phone size={32} className="text-gold" />
                  </div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">Call Us Directly</p>
                  <div className="flex flex-col gap-4 w-full text-center">
                    <a href="tel:+919893032280" className="text-white font-display text-2xl md:text-3xl font-bold hover:text-gold transition-colors">+91 9893032280</a>
                    <a href="tel:+919685196192" className="text-white font-display text-2xl md:text-3xl font-bold hover:text-gold transition-colors">+91 9685196192</a>
                    <a href="tel:+919893800675" className="text-white font-display text-2xl md:text-3xl font-bold hover:text-gold transition-colors">+91 9893800675</a>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="email"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Mail size={32} className="text-gold" />
                  </div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">Send us an email</p>
                  <p className="text-white font-display text-xl sm:text-2xl font-bold mb-8 text-center break-all">Kalavatipohaindustries<br className="sm:hidden" />@gmail.com</p>
                  <a 
                    href="mailto:Kalavatipohaindustries@gmail.com" 
                    className="inline-flex items-center justify-center h-14 gap-2 group bg-gold hover:bg-gold-light text-charcoal-dark rounded-full font-bold tracking-wider text-xs uppercase px-10 w-full transition-colors"
                  >
                    Compose Email
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
