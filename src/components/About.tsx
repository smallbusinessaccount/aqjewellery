
import React from 'react';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

const About: React.FC = () => {
  return (
    <ResponsiveSection 
      id="about" 
      background="gradient"
      className="overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow opacity-30" />
      
      <div className="relative">
        <SectionHeader title="Our Heritage" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-inter font-semibold lavender-accent mb-4">
              Family Tradition Since Generations
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Abdul Qaiyum Jewellery represents decades of traditional craftsmanship passed down through generations. 
              Our family has been creating exquisite jewelry pieces that celebrate life's most precious moments.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Located in the heart of Bahrain, we combine time-honored techniques with contemporary designs, 
              ensuring each piece tells a unique story of elegance and sophistication.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center glass-purple p-4 rounded-xl">
                <div className="text-3xl font-bold lavender-accent mb-2">40+</div>
                <div className="text-sm text-white/70">Years of Excellence</div>
              </div>
              <div className="text-center glass-purple p-4 rounded-xl">
                <div className="text-3xl font-bold lavender-accent mb-2">1000+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden soft-glow transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/heritage.png" 
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 glass-purple rounded-full opacity-60 animate-float" />
            <div className="absolute -top-6 -right-6 w-16 h-16 glass-purple rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default About;
