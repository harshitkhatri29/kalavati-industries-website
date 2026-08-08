import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export default function WhoWeServe() {
  const cards = [
    {
      title: "For Distributors",
      description: "Expand your portfolio with India's finest poha. We offer extensive support, marketing materials, and guaranteed pan-India delivery logistics to ensure your success.",
      tags: ["Pan-India Network", "Marketing Support", "Priority Logistics"],
      image: "/images/distributor.jpg",
      cta: "Become a Distributor"
    },
    {
      title: "For Wholesalers",
      description: "Consistent quality at scale. Our state-of-the-art facilities ensure that every bulk order meets exact specifications with reliable year-round supply.",
      tags: ["Bulk Volumes", "Custom Packaging", "Quality Assured"],
      image: "/images/wholesaler.jpg",
      cta: "Request Wholesale Quote"
    }
  ];

  return (
    <section id="wholesale" className="py-24 px-6 lg:px-8 relative z-10 bg-charcoal-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-4">Partnerships</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight">
            Grow your business with <br /> Kalavati Industries.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col will-change-transform relative overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-transparent opacity-90" />
              </div>

              <div className="relative p-10 md:p-12 h-full min-h-[450px] flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/80 leading-relaxed mb-8 max-w-sm">
                  {card.description}
                </p>
                
                <Button variant="primary" className="w-fit">
                  {card.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
