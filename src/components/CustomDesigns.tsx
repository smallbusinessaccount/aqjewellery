
import React from 'react';
import { useChat } from './ChatContext';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

interface DesignProcess {
  step: string;
  title: string;
  description: string;
  image: string;
}

const CustomDesigns: React.FC = () => {
  const { openChat } = useChat();
  
  const designProcess: DesignProcess[] = [
    {
      step: "01",
      title: "Your Idea",
      description: "Share your vision with our master craftsmen",
      image: "/1sketch.png"
    },
    {
      step: "02", 
      title: "CAD Render",
      description: "We create detailed 3D models for your approval",
      image: "/23dmodel.png"
    },
    {
      step: "03",
      title: "Final Piece",
      description: "Your dream jewelry brought to life with precision",
      image: "/3ring.png"
    }
  ];

  const handleContactClick = () => {
    openChat();
  };

  return (
    <ResponsiveSection id="custom-designs" background="gradient">
      <SectionHeader 
        title="Custom Design Process"
        subtitle="From concept to creation - watch your unique jewelry vision come to life through our meticulous design process"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {designProcess.map((process, index) => (
          <div 
            key={index}
            className="group relative flex flex-col h-full"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            {/* Step number */}
            <div className="absolute -top-4 left-6 z-10">
              <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center text-white font-bold text-lg soft-glow">
                {process.step}
              </div>
            </div>

            {/* Card */}
            <div className="glass-purple flex flex-col h-full rounded-2xl overflow-hidden hover:soft-glow transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="h-64 w-full overflow-hidden flex items-center justify-center bg-black/10">
                {process.step === "02" ? (
                  <model-viewer
                    src="/ring.glb"
                    alt={process.title}
                    auto-rotate
                    camera-controls
                    disable-zoom
                    ar
                    className="w-full h-full"
                    style={{ background: 'transparent', height: '100%', width: '100%' }}
                  />
                ) : (
                  <img 
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-inter font-semibold text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>

            {/* Connecting line (except for last item) */}
            {index < designProcess.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-jewelry-lavender/30 z-0" />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-white">
          <span className="text-lg font-semibold">Ready to start your custom design?</span>
          <button 
            onClick={handleContactClick} 
            className="ml-4 px-6 py-3 glass-button text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            aria-label="Contact us to start your custom design"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default CustomDesigns;
