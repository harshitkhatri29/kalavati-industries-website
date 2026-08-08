import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-leaf text-white hover:bg-leaf-dark shadow-premium hover:shadow-premium-hover",
    secondary: "bg-cream-200 text-charcoal-dark hover:bg-cream-300",
    outline: "border-2 border-charcoal-dark text-charcoal-dark hover:bg-charcoal-dark hover:text-white",
    ghost: "text-charcoal hover:bg-cream-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
