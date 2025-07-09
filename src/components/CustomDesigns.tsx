import { useChat } from './ChatContext';

const CustomDesigns = () => {
  const { openChat } = useChat();
  const designProcess = [
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

  return (
    <section id="custom-designs" className="py-20 bg-gradient-to-br from-jewelry-purple-dark/20 via-background to-jewelry-indigo/10 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light font-inter mb-8 text-white">
            Custom Design Process
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From concept to creation - watch your unique jewelry vision come to life through our meticulous design process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {designProcess.map((process, index) => (
            <div 
              key={index}
              className="group relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-6 z-10">
                <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center text-white font-bold text-lg soft-glow">
                  {process.step}
                </div>
              </div>

              {/* Card */}
              <div className="glass-purple rounded-2xl overflow-hidden hover:soft-glow transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
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
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-jewelry-lavender/30 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-white">
            <span className="text-lg font-semibold">Ready to start your custom design?</span>
            <button onClick={openChat} className="ml-4 px-6 py-3 glass-button text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesigns;
