import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/utils';

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className 
}) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-16", alignStyles[alignment], className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold-dark font-medium tracking-wider uppercase text-sm mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
