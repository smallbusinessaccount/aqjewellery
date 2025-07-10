
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  location: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Elzette Botha",
      rating: 5,
      text: "I recently had a custom gemstone ring made by Abdul Quiyum Jewellery (Saar Mall), and I couldn't be happier! They were patient and creative, guiding me through the design process with expertise. The attention to detail is remarkable, and the ring perfectly reflects my style. If you're looking for a talented and welcoming jeweler, I highly recommend Abdul Quiyum Jewellery.Thank you for bringing my vision to life!",
      location: "Bahrain"
    },
    {
      name: "Patricia Smith",
      rating: 5,  
      text: "I have had countless pieces of Jewellery made by Abdul. Always made to a high standard and he is always fair when pricing. Highly recommend this Jeweller and his team.",
      location: "Bahrain"
    },
    {
      name: "Lakshmi Iyer",
      rating: 5,
      text: "Extremely professional service and craftsmanship. The designs are top notch, with sensible prices. AbdulQaiyum, who is a polite gentleman, is an experienced jeweler. Patron since 20+ years. Thank you!",
      location: "Bahrain"
    }
  ];

  const handleGoogleReviewsClick = () => {
    window.open('https://maps.app.goo.gl/nUVvNTtMWkskxVYy5', '_blank');
  };

  return (
    <ResponsiveSection 
      id="testimonials" 
      background="darker"
      className="overflow-hidden"
    >
      <div className="absolute inset-0 radial-glow opacity-20" />
      
      <div className="relative">
        <SectionHeader 
          title="What Our Customers Say"
          subtitle="Hear from our valued customers about their experience with Abdul Qaiyum Jewellery"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-purple hover:soft-glow transition-all duration-500 transform hover:scale-105 border-0"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-jewelry-lavender fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer info */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-white font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews link */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">See more reviews on</p>
          <button 
            className="inline-flex items-center space-x-2 glass-button text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            onClick={handleGoogleReviewsClick}
            aria-label="View our Google Reviews"
          >
            <span>Google Reviews</span>
            <Star className="w-4 h-4 fill-current text-jewelry-lavender" />
          </button>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Testimonials;
