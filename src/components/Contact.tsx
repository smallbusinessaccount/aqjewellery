
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-6 h-6 text-jewelry-lavender" />,
      title: "Our Location",
      content: (
        <p className="text-white/80">
          Shop 106, 1st Floor, Saar Mall, Building 133 Road 25, <br />
          Saar 525, Kingdom of Bahrain
        </p>
      )
    },
    {
      icon: <Clock className="w-6 h-6 text-jewelry-lavender" />,
      title: "Opening Hours",
      content: (
        <div className="text-white/80 space-y-1">
          <p>Saturday - Thursday: 10:30 AM - 9:00 PM</p>
        </div>
      )
    },
    {
      icon: <Phone className="w-6 h-6 text-jewelry-lavender" />,
      title: "Contact Information",
      content: (
        <div className="text-white/80 space-y-1">
          <p>Phone: +973 3376 9393</p>
          <p>WhatsApp: +973 3376 9393</p>
        </div>
      )
    }
  ];

  return (
    <ResponsiveSection id="contact">
      <SectionHeader 
        title="Visit Our Store"
        subtitle="Experience our exquisite collections in person at our Bahrain location"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <GlassCard key={index}>
              <div className="flex items-start space-x-4">
                <div className="glass-button rounded-full p-3">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-inter font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  {info.content}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Map */}
        <div className="lg:sticky lg:top-8">
          <GlassCard className="overflow-hidden soft-glow" hover={false}>
            <div className="aspect-square lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.8939522562127!2d50.4981382!3d26.200127799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49b19c356313ed%3A0xb585393ce984a263!2sAbdul%20Qaiyum%20Jewellery%20WLL!5e0!3m2!1sen!2sau!4v1751625851707!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abdul Qaiyum Jewellery Location"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Contact;
