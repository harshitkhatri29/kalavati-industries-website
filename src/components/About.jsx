import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative z-10 bg-cream-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative will-change-transform"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img 
                src="/images/about.jpg" 
                alt="Traditional Rice Farming" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-display text-2xl font-bold mb-2">Since 1980</p>
                <p className="text-white/80 text-sm">Preserving the authentic methods of traditional poha making for generations.</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream-300 rounded-[2rem] -z-10" />
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-leaf text-xs font-bold tracking-widest uppercase block mb-4">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal-dark leading-tight">
                Four decades of crafting India's finest poha.
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="will-change-transform"
            >
              <p className="text-lg text-charcoal/70 mb-10 leading-relaxed border-l-2 border-gold/30 pl-6">
                What began as a small family venture in 1980 has grown into one of India's most trusted poha manufacturers. We marry traditional sun-drying wisdom with state-of-the-art hygienic production — treating every grain with the reverence it deserves.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-12 pt-8 border-t border-charcoal/5">
                <div>
                  <p className="text-3xl font-display font-medium text-gold-dark mb-1">45<span className="text-xl">+</span></p>
                  <p className="text-xs font-bold tracking-widest text-charcoal/50 uppercase">Years of Legacy</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-medium text-gold-dark mb-1">1000<span className="text-xl">s</span></p>
                  <p className="text-xs font-bold tracking-widest text-charcoal/50 uppercase">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-medium text-gold-dark mb-1">100<span className="text-xl">%</span></p>
                  <p className="text-xs font-bold tracking-widest text-charcoal/50 uppercase">Trusted Manufacturing</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
