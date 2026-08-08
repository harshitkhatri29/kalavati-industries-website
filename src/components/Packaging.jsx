import React from 'react';
import { motion } from 'framer-motion';

const packagingOptions = [
  {
    name: "30 kg Bulk Packaging",
    description: "Premium heavy-duty packaging designed for distributors and wholesalers, ensuring freshness and durability during transport.",
    image: "/images/30kg-packaging.jpg",
    color: "bg-[#4A3B32]/10"
  },
  {
    name: "1 kg Retail Packaging",
    description: "Retail-ready premium packaging that locks in the authentic aroma and taste for everyday consumers.",
    image: "/images/1kg-packaging.jpg",
    color: "bg-[#E6D7B7]/40"
  }
];

export default function Packaging() {
  return (
    <section id="packaging" className="py-24 px-6 lg:px-8 relative z-10 bg-cream-50/50">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <span className="text-leaf text-xs font-bold tracking-widest uppercase block mb-4">Packaging Solutions</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium text-charcoal-dark leading-tight">
            Premium packaging for every need.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {packagingOptions.map((pack, index) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
              className="group flex flex-col will-change-transform"
            >
              <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 ${pack.color} flex items-center justify-center p-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500`}>
                <div className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={pack.image} 
                    alt={pack.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="px-2 text-center md:text-left">
                <h3 className="text-2xl font-display font-medium text-charcoal-dark mb-2">{pack.name}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{pack.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
