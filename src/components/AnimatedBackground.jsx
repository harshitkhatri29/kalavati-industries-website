import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  // Generate fewer, larger decorative elements
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 6,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  const flakes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 25,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-leaf-light/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold-light/10 blur-[120px]" />
      
      {/* Parallax Layer 1: Tiny Rice Grains & Particles */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 will-change-transform">
        {particles.map(p => (
          <div
            key={`p-${p.id}`}
            className="absolute rounded-full bg-gold-dark animate-particle will-change-transform"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              "--tw-opacity-base": p.opacity,
              "--tw-duration": `${p.duration}s`,
              "--tw-delay": `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Layer 2: Floating Poha Flakes */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 will-change-transform">
        {flakes.map(f => (
          <div
            key={`f-${f.id}`}
            className="absolute bg-cream-200/40 backdrop-blur-sm rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-flake will-change-transform"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              width: f.size * 2,
              height: f.size,
              "--tw-rot-start": `${f.rotation}deg`,
              "--tw-duration": `${f.duration}s`,
              "--tw-delay": `${f.delay}s`,
              transform: `rotate(${f.rotation}deg)`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Parallax Layer 3: Subtle Organic Shapes */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-20 will-change-transform">
        <svg className="absolute top-[20%] left-[10%] w-64 h-64 text-leaf-light" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-73.4C55.9,-67.8,67.6,-57.4,76.5,-44.6C85.4,-31.8,91.5,-16.7,91.8,-1.5C92.1,13.7,86.6,29,76.6,41C66.6,53,52.1,61.7,37.3,68.4C22.5,75.1,7.4,79.8,-7.2,78.2C-21.8,76.6,-35.9,68.7,-49.2,60C-62.5,51.3,-75,41.8,-81.9,29.1C-88.8,16.4,-90.1,0.5,-86.3,-14.2C-82.5,-28.9,-73.6,-42.4,-61.6,-51.5C-49.6,-60.6,-34.5,-65.3,-20.5,-70.7C-6.5,-76.1,6.4,-82.2,20.4,-81.6C34.4,-81,42.7,-73.4,42.7,-73.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
    </div>
  );
}
