import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import OurBrands from './components/OurBrands';
import Packaging from './components/Packaging';
import HealthBenefits from './components/HealthBenefits';
import WhoWeServe from './components/WhoWeServe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Rich Animated Background Layer */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <OurBrands />
          <Packaging />
          <HealthBenefits />
          <WhoWeServe />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
