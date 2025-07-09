
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentMarqueeIndex, setCurrentMarqueeIndex] = useState(0);

  const marqueeTexts = [
    "Precious Pearls",
    "Diamond Collection", 
    "Gold Jewellery",
    "Gemstones",
    "Wedding Sets",
    "Custom Designs"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMarqueeIndex((prev) => (prev + 1) % marqueeTexts.length);
    }, 2000); // 1 second display + 1 second transition

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 radial-glow"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 radial-glow opacity-60"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 radial-glow opacity-40"></div>
      </div>

      {/* Sticky Header with improved padding */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-purple header-compact' : 'bg-transparent header-full'
      }`}>
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between ${
            isScrolled ? 'py-4' : 'py-4'
          }`}>
            {/* Logo - top left with better spacing */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 glass-purple rounded-full flex items-center justify-center">
                <img
      src="/aq-white-initials-thicker.png"
      alt="AQ Logo"
      className="w-11 h-11 object-contain"
    />
              </div>
              {!isScrolled && (
                <div className="hidden sm:block">
                  <h3 className="text-lg font-medium text-white">Abdul Qaiyum</h3>
                  <p className="text-jewelry-lavender text-sm">Jewellery</p>
                </div>
              )}
            </div>

            {/* Instagram icon - top right */}
            <Button
              variant="ghost"
              size="icon"
              className="glass-button text-white hover:text-jewelry-lavender"
              onClick={() => window.open('https://www.instagram.com/aqjewellery.bh', '_blank')}
            >
              <Instagram size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Left-Right Layout and responsive text alignment */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with responsive alignment */}
            <div className="text-left lg:text-left md:text-center text-center space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-light font-inter mb-6">
                Abdul Qaiyum
                <span className="block lavender-accent">Jewellery</span>
              </h1>
              
              {/* Vertical Marquee replacing tagline */}
              <div className="h-8 overflow-hidden relative flex justify-center lg:justify-start">
                <div 
                  className="transition-transform duration-1000 ease-spring"
                  style={{
                    transform: `translateY(-${currentMarqueeIndex * 2}rem)`
                  }}
                >
                  {marqueeTexts.map((text, index) => (
                    <p 
                      key={index}
                      className="text-lg md:text-xl text-jewelry-purple-light font-light h-8 flex items-center justify-center lg:justify-start text-center lg:text-left"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="h-8 overflow-hidden relative flex justify-center lg:justify-start">
                <p className="text-base text-white/70 max-w-xl leading-relaxed text-center lg:text-left">
                  Experience the artistry of traditional jewelry making with contemporary designs in the heart of Bahrain
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="glass-button text-white font-medium px-8 py-4 text-base rounded-xl"
                  onClick={() => document.getElementById('signature-pieces')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Collections
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-button border-jewelry-lavender/30 text-white hover:bg-white/10 px-8 py-4 text-base rounded-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Visit Our Store
                </Button>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="aspect-square max-w-md mx-auto relative">
                {/* TODO: Replace with actual person wearing jewelry image with transparent background */}
                <div className="w-full h-full rounded-3xl overflow-hidden soft-glow">
                  <img 
                    src="/model.jpg" 
                    alt="Person wearing elegant jewelry"
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 glass-purple rounded-full animate-float opacity-70" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-purple rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-jewelry-lavender rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
