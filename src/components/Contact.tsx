
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-jewelry-purple-dark/10 to-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light font-inter mb-8 text-white">
            Visit Our Store
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience our exquisite collections in person at our Bahrain location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-purple border-0 hover:soft-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="glass-button rounded-full p-3">
                    <MapPin className="w-6 h-6 text-jewelry-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-semibold text-white mb-2">
                      Our Location
                    </h3>
                    <p className="text-white/80">
                      {/* TODO: Replace with actual address from Google Maps */}
                      Shop 106, 1st Floor, Saar Mall, Building 133 Road 25, <br />
                      Saar 525, Kingdom of Bahrain
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-purple border-0 hover:soft-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="glass-button rounded-full p-3">
                    <Clock className="w-6 h-6 text-jewelry-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-semibold text-white mb-2">
                      Opening Hours
                    </h3>
                    <div className="text-white/80 space-y-1">
                      <p>Saturday - Thursday: 10:30 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-purple border-0 hover:soft-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="glass-button rounded-full p-3">
                    <Phone className="w-6 h-6 text-jewelry-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-semibold text-white mb-2">
                      Contact Information
                    </h3>
                    <div className="text-white/80 space-y-1">
                      {/* TODO: Replace with actual phone numbers */}
                      <p>Phone: +973 3376 9393</p>
                      <p>WhatsApp: +973 3376 9393</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <Card className="overflow-hidden glass-purple border-0 soft-glow">
              <CardContent className="p-0">
                <div className="aspect-square lg:aspect-[4/3]">
                  {/* TODO: Replace with actual Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.8939522562127!2d50.4981382!3d26.200127799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49b19c356313ed%3A0xb585393ce984a263!2sAbdul%20Qaiyum%20Jewellery%20WLL!5e0!3m2!1sen!2sau!4v1751625851707!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Abdul Qaiyum Jewellery Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
