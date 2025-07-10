
import React from 'react';
import { Award, HandHeart, ShieldCheck, Stamp, Sparkles } from 'lucide-react';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';
import IconFeature from './common/IconFeature';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Generations of Expertise",
      description: "With decades of experience in Bahrain's jewellery trade, we bring deep heritage and unmatched craftsmanship to every piece."
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Locally Handcrafted Excellence",
      description: "All our jewellery is proudly made in Bahrain by skilled local artisans, blending traditional techniques with modern design."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Ethically Sourced, Certified Stones",
      description: "We carefully select our pearls, gemstones, and diamonds from ethical sources — each diamond comes with a certificate of authenticity."
    },
    {
      icon: <Stamp className="w-8 h-8" />,
      title: "Government-Certified Quality",
      description: "Every piece is officially stamped and verified by Bahrain's Ministry of Industry and Commerce, ensuring quality and trust."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Complimentary Jewellery Cleaning",
      description: "We offer unlimited free cleaning for any jewellery purchased from our store — because your treasures deserve lasting brilliance."
    }
  ];

  return (
    <ResponsiveSection id="why-choose-us">
      <SectionHeader 
        title="Why Choose Us"
        subtitle="Here's why customers trust Abdul Qaiyum Jewellery for their most treasured pieces:"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {reasons.map((reason, index) => (
          <GlassCard 
            key={index}
            className="transform hover:-translate-y-1"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <IconFeature
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          </GlassCard>
        ))}
      </div>
    </ResponsiveSection>
  );
};

export default WhyChooseUs;
