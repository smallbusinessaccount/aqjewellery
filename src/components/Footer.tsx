
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-jewelry-purple-darker via-gray-900 to-jewelry-indigo text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6 text-center md:text-left">
            {/* TODO: Replace with actual logo */}
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-12 h-12 glass-purple rounded-full flex items-center justify-center">
                <img
      src="/aq-white-initials-thicker.png"
      alt="AQ Logo"
      className="w-11 h-11 object-contain"
    />
              </div>
              <div>
                <h3 className="text-lg font-medium">Abdul Qaiyum</h3>
                <p className="text-white/70 text-sm">Jewellery</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Crafting timeless elegance through generations of expertise in fine jewelry making.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => window.open('https://www.instagram.com/aqjewellery.bh', '_blank')}
                className="w-10 h-10 glass-purple rounded-full flex items-center justify-center hover:soft-glow transition-all duration-200"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-base font-medium">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors duration-200 text-sm mx-auto md:mx-0"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('signature-pieces')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors duration-200 text-sm mx-auto md:mx-0"
              >
                Collections
              </button>
              <button 
                onClick={() => document.getElementById('custom-designs')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors duration-200 text-sm mx-auto md:mx-0"
              >
                Custom Designs
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors duration-200 text-sm mx-auto md:mx-0"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-base font-medium">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin size={16} className="text-jewelry-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Shop 106, 1st Floor, Saar Mall, Building 133 Road 25, <br />
                    Saar 525, Kingdom of Bahrain
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone size={16} className="text-jewelry-lavender flex-shrink-0" />
                <p className="text-white/70 text-sm">+973 3376 9393</p>
              </div>
              
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Clock size={16} className="text-jewelry-lavender mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>Sat-Thu: 10:30AM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-xs">
            © مجوهرات عبدالقيوم ذ.م.م | ABDUL QAIYUM JEWELLERY W.L.L. All rights reserved.| CR 172880-1 | Crafted with passion in Bahrain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
