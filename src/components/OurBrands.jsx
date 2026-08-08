import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: "Dadi Maa Poha",
    category: "HERITAGE CLASSIC",
    description: "Thick traditional flakes — perfect for the authentic Indori breakfast.",
    image: "/images/dadi-maa-poha.jpg",
    color: "bg-[#E6D7B7]/40"
  },
  {
    name: "Munch Poha",
    category: "LIGHT & CRISPY",
    description: "Medium-weight flakes designed for the modern health-conscious snacker.",
    image: "/images/munch-poha.jpg",
    color: "bg-[#F4D03F]/20"
  },
];

export default function OurBrands() {
  return (
    <section id="brands" className="py-24 px-6 lg:px-8 relative z-10 bg-cream-50">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <span className="text-leaf text-xs font-bold tracking-widest uppercase block mb-4">Our Brands</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium text-charcoal-dark leading-tight">
            Distinct grades for every kitchen.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
              className="group cursor-pointer flex flex-col will-change-transform"
            >
              <div className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 ${product.color} flex items-center justify-center p-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500`}>
                <div className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-gold-dark text-[10px] font-bold tracking-widest uppercase mb-2">{product.category}</p>
                <h3 className="text-2xl font-display font-medium text-charcoal-dark mb-2">{product.name}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="text-center mt-16 will-change-transform"
        >
          <div className="w-16 h-px bg-charcoal/20 mx-auto mb-6" />
          <p className="text-charcoal/50 italic font-medium tracking-wide">More products coming soon.</p>
        </motion.div>
      </div>
    </section>
  );
}
