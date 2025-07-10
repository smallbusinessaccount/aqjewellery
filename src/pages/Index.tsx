
import Header from '@/components/Header';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import SignaturePieces from '@/components/SignaturePieces';
import ProductLines from '@/components/ProductLines';
import OurServices from '@/components/OurServices';
import CustomDesigns from '@/components/CustomDesigns';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { ChatProvider } from '@/components/ChatContext';

const Index = () => {
  return (
    <ChatProvider>
    <div className="min-h-screen">
      <Header />
      <About />
      <WhyChooseUs />
      <SignaturePieces />
      <ProductLines />
      <OurServices />
      <CustomDesigns />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
      
      {/* TODO: Add Google Analytics tracking code here */}
      {/* 
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
      </script>
      */}
    </div>
    </ChatProvider>
  );
};

export default Index;
