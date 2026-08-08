import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Leaf, Droplets, Sun, Award, ShieldCheck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <Leaf />,
    title: "100% Natural",
    description: "Sourced directly from trusted farmers, containing zero artificial additives or preservatives."
  },
  {
    icon: <Sun />,
    title: "Sun-Dried Process",
    description: "Traditionally sun-dried to lock in nutrients and ensure the perfect moisture content."
  },
  {
    icon: <ShieldCheck />,
    title: "Hygienic Packing",
    description: "Processed and packed in state-of-the-art facilities ensuring maximum hygiene."
  },
  {
    icon: <Award />,
    title: "Premium Grade",
    description: "Triple-sorted to ensure only the finest, unbroken flakes make it to your kitchen."
  },
  {
    icon: <HeartPulse />,
    title: "Rich in Iron",
    description: "A natural source of iron and essential vitamins for a healthy start to your day."
  },
  {
    icon: <Droplets />,
    title: "Perfect Texture",
    description: "Absorbs just the right amount of water, never turning mushy when cooked."
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8 relative z-10 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
          <div>
            <span className="text-leaf text-xs font-bold tracking-widest uppercase block mb-4">Why Choose Us</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-charcoal-dark leading-tight max-w-xl">
              Built on quality.<br />Defined by trust.
            </h2>
          </div>
          <p className="text-charcoal/60 text-sm max-w-sm border-l-2 border-gold/30 pl-4">
            Every step of our process is designed to preserve the nutritional integrity and natural taste of the grain.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-charcoal/10 rounded-[2.5rem] overflow-hidden bg-white/40"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group p-10 md:p-12 transition-all duration-300 border-charcoal/5 hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-charcoal/5 ${
                index % 3 !== 2 ? 'lg:border-r' : ''
              } ${index < 3 ? 'border-b' : ''} hover:rounded-[2rem] hover:z-10 relative will-change-transform`}
            >
              <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-gold-dark mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-light/20">
                {React.cloneElement(feature.icon, { size: 20, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-2xl font-display font-medium text-charcoal-dark mb-4 group-hover:text-gold-dark transition-colors duration-300">{feature.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
