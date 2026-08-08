import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Heart, Brain, Zap, Activity, Battery, ActivitySquare } from 'lucide-react';

const benefits = [
  { icon: <Heart />, title: "Heart Healthy", desc: "Low in cholesterol and saturated fats, promoting cardiovascular health." },
  { icon: <Brain />, title: "Rich in Iron", desc: "Helps prevent anemia and supports cognitive function and focus." },
  { icon: <Zap />, title: "Instant Energy", desc: "Complex carbohydrates provide a steady release of sustained energy." },
  { icon: <Activity />, title: "Easy to Digest", desc: "Light on the stomach, making it the perfect breakfast choice." },
  { icon: <Battery />, title: "Nutrient Dense", desc: "Packed with essential vitamins, minerals, and antioxidants." },
  { icon: <ActivitySquare />, title: "Gluten Free", desc: "Naturally free from gluten, ideal for sensitive digestions." }
];

export default function HealthBenefits() {
  return (
    <section id="benefits" className="py-24 px-6 lg:px-8 relative z-10 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-leaf text-xs font-bold tracking-widest uppercase block mb-4">Health Benefits</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium text-charcoal-dark leading-tight">
            Wholesome. <span className="text-leaf italic">Nourishing.</span> Pure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
              className="group p-8 md:p-10 rounded-[2rem] border border-charcoal/10 bg-white/40 hover:bg-white hover:shadow-xl transition-all duration-500 will-change-transform"
            >
              <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center text-leaf shrink-0 mb-6 group-hover:bg-leaf group-hover:text-white transition-colors duration-300">
                {React.cloneElement(benefit.icon, { size: 20, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-display font-medium mb-3 text-charcoal-dark">{benefit.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
