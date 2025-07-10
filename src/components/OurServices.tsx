
import React from 'react';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

const OurServices: React.FC = () => {
  const services: string[] = [
    "Customized Jewellery",
    "Casting Jobs", 
    "Repairing Works",
    "Stone Setting",
    "Polishing & Cleaning Jewellery",
    "Photo Printing on Jewellery",
    "Engraving",
    "Restringing Pearls",
    "Name Pendants",
    "Cartouche",
    "CAD Designs",
    "Masonic Designs",
    "Platinum Jewellery",
    "Customized Gold Teeth & Grillz",
    "We Buy Used Gold"
  ];

  return (
    <ResponsiveSection id="our-services" background="darker">
      <SectionHeader title="Our Services" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-purple px-6 py-4 rounded-full text-center hover:soft-glow transition-all duration-300 transform hover:scale-105"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <span className="text-white/90 text-sm font-medium">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default OurServices;
