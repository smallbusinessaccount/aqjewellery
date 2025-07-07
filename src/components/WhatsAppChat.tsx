
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // TODO: Replace with actual WhatsApp Business number
    const phoneNumber = '+97333769393'; // Replace with actual number
    const message = 'Hello! I am interested in your jewelry collections.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full glass-button animate-glow-pulse"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass-purple rounded-2xl border border-jewelry-lavender/20 animate-fade-in-up">
          <div className="jewelry-gradient p-4 rounded-t-2xl">
            <h3 className="text-white font-semibold">Chat with us!</h3>
            <p className="text-white/90 text-sm">We're here to help you find the perfect piece</p>
          </div>
          
          <div className="p-6">
            <div className="glass-purple rounded-lg p-4 mb-4">
              <p className="text-sm text-white/90 mb-2">👋 Welcome to Abdul Qaiyum Jewellery!</p>
              <p className="text-sm text-white/80">How can we help you today?</p>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full text-left p-3 rounded-lg glass-purple hover:soft-glow transition-all duration-200"
              >
                <p className="text-sm font-medium text-white">💍 Browse Collections</p>
                <p className="text-xs text-white/70">See our latest jewelry pieces</p>
              </button>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full text-left p-3 rounded-lg glass-purple hover:soft-glow transition-all duration-200"
              >
                <p className="text-sm font-medium text-white">✨ Custom Design</p>
                <p className="text-xs text-white/70">Create your unique piece</p>
              </button>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full text-left p-3 rounded-lg glass-purple hover:soft-glow transition-all duration-200"
              >
                <p className="text-sm font-medium text-white">📍 Visit Store</p>
                <p className="text-xs text-white/70">Get directions & store hours</p>
              </button>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-4 bg-green-500/80 hover:bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              <span>Continue on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
