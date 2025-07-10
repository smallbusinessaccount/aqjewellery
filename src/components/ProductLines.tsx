
import React from 'react';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductLines: React.FC = () => {
  const categories: Category[] = [
    {
      icon: <img src="/icons/pearls.png" alt="Precious Pearls Icon" className="w-10 h-10" />,
      title: "Precious Pearls",
      description: "Bahraini natural pearls"
    },
    {
      icon: <img src="/icons/diamond.png" alt="Diamond Collection Icon" className="w-10 h-10" />,
      title: "Diamond Collection", 
      description: "Certified diamonds & settings"
    },
    {
      icon: <img src="/icons/gold.png" alt="Gold Jewelry Icon" className="w-10 h-10" />,
      title: "Gold Jewelry",
      description: "18K & 21K gold designs"
    },
    {
      icon: <img src="/icons/gemstones.png" alt="Gemstones Icon" className="w-10 h-10" />,
      title: "Gemstones",
      description: "Ruby, sapphire & emerald"
    },
    {
      icon: <img src="/icons/wedding-ring.png" alt="Wedding Sets Icon" className="w-10 h-10" />,
      title: "Wedding Sets",
      description: "Bridal & engagement jewelry"
    },
    {
      icon: <img src="/icons/sketch.png" alt="Custom Designs Icon" className="w-10 h-10" />,
      title: "Custom Designs",
      description: "Bespoke jewelry creation"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/aqjewellery.bh', '_blank');
  };

  return (
    <ResponsiveSection id="product-lines">
      <SectionHeader 
        title="Our Collections"
        subtitle="Explore our diverse range of jewelry categories, each crafted with precision and care"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group p-8 text-center rounded-2xl glass-purple hover:soft-glow transition-all duration-500 transform hover:-translate-y-2"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full text-jewelry-lavender mb-6 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-xl font-inter font-semibold text-white mb-3">
              {category.title}
            </h3>
            <p className="text-white/70">
              {category.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-white/80 mb-6">
          View our entire collection here at Instagram @aqjewellery.bh
        </p>
        <button 
          onClick={handleInstagramClick}
          className="px-8 py-3 glass-button text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:soft-glow"
          aria-label="Visit our Instagram page"
        >
          Visit Our Instagram
        </button>
      </div>
    </ResponsiveSection>
  );
};

export default ProductLines;
