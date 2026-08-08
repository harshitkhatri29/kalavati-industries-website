import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-charcoal/10 pt-16 pb-8 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <span className="font-display font-bold text-2xl tracking-tight text-charcoal-dark">
                Kalavati<span className="text-gold-dark leading-none">.</span>
              </span>
            </a>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-6 max-w-xs">
              Bringing the finest, traditionally crafted flattened rice to kitchens worldwide since 1980.
            </p>
            <div className="flex gap-4">
              {/* Social Icons placeholder */}
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-70 mask-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-charcoal-dark mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Our Story', 'Premium Range', 'Health Benefits', 'Recipes', 'Sustainability'].map(link => (
                <li key={link}>
                  <a href="#" className="text-charcoal/70 hover:text-gold-dark text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-charcoal-dark mb-6">Support</h4>
            <ul className="space-y-4">
              {['FAQ', 'Shipping Policy', 'Returns & Refunds', 'Track Order', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-charcoal/70 hover:text-gold-dark text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-bold text-charcoal-dark mb-6">Newsletter</h4>
            <p className="text-charcoal/60 text-sm mb-4">Subscribe for recipes, offers and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="flex-1 bg-white border border-charcoal/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold-dark transition-colors"
              />
              <button type="submit" className="bg-charcoal-dark text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gold-dark transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal/50 text-sm">
            &copy; {currentYear} Kalavati Industries. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-charcoal/50 hover:text-charcoal-dark text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-charcoal/50 hover:text-charcoal-dark text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
