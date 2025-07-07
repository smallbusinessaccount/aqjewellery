
//import { Gem, Crown, Heart, Star, Sparkles, Diamond } from 'lucide-react';

const ProductLines = () => {
  const categories = [
    {
      icon: <img src="/icons/pearls.png" alt="Precious Pearls Icon" className="w-10 h-10" />,
      title: "Precious Pearls",
      description: "Cultured and natural pearls"
    },
    {
      icon: <img src="/icons/diamond.png" alt="Diamond Collection Icon" className="w-10 h-10" />,
      title: "Diamond Collection", 
      description: "Certified diamonds & settings"
    },
    {
      icon: <img src="/icons/gold.png" alt="Gold Jewelry Icon" className="w-10 h-10" />,
      title: "Gold Jewelry",
      description: "18K & 22K gold designs"
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

  return (
    <section id="product-lines" className="py-20 bg-gradient-to-br from-background via-jewelry-purple-dark/10 to-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light font-inter mb-8 text-white">
            Our Collections
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our diverse range of jewelry categories, each crafted with precision and care
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default ProductLines;
