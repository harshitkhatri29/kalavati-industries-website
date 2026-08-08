import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col max-w-xl will-change-transform"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex items-center gap-4 text-leaf font-bold tracking-widest text-xs uppercase mb-8 will-change-transform"
          >
            <div className="w-8 h-px bg-leaf/50" />
            <span>Poha Manufacturers · Est. 1980</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium text-charcoal-dark leading-[1.1] mb-6">
            The Gold<br />Standard of<br />
            <span className="text-gold-dark italic pr-2">Indian Poha.</span>
          </h1>
          
          <p className="text-lg text-charcoal/70 mb-10 leading-relaxed max-w-md">
            Four decades of meticulously crafted rice flakes, trusted by wholesalers and distributors across India. Heritage in every grain, precision in every batch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center h-12 gap-2 group bg-charcoal-dark hover:bg-charcoal text-white rounded-full font-bold tracking-wider text-xs uppercase px-8 transition-colors">
              Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#brands" className="inline-flex items-center justify-center h-12 rounded-full font-bold tracking-wider text-xs uppercase px-8 border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-colors">
              Explore Our Brands
            </a>
          </div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="relative lg:h-[700px] flex items-center justify-center lg:justify-end will-change-transform"
        >
          {/* Main Image Container */}
          <motion.div 
            className="relative w-full max-w-[600px] aspect-square rounded-full shadow-2xl bg-white overflow-hidden will-change-transform"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src="/images/hero-poha.jpg" 
              alt="Premium Poha Bowl" 
              className="w-full h-full object-cover object-center scale-[1.25]"
            />
            {/* Subtle inner shadow for depth and premium border */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] border-[4px] border-white/10 pointer-events-none" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 md:left-0 lg:left-[-10%] glassmorphism px-8 py-5 rounded-2xl flex flex-col bg-white/90 backdrop-blur-xl"
          >
            <p className="text-[10px] font-bold tracking-widest text-charcoal/50 uppercase mb-1">Grade</p>
            <p className="font-display font-bold text-2xl text-gold-dark">A1 Premium</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
