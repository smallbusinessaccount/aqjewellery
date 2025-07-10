
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ResponsiveSection from './common/ResponsiveSection';
import SectionHeader from './common/SectionHeader';

interface SignaturePiece {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const SignaturePieces: React.FC = () => {
  const pieces: SignaturePiece[] = [
    {
      id: 1,
      title: "Diamond Heritage Ring",
      description: "Exquisite diamond rings for special occasions",
      image: "/signature1.png",
      price: "Call us for pricing"
    },
    {
      id: 2,
      title: "Gemstone Ring",
      description: "Blue Sapphire with diamond ring in 18k White gold",
      image: "/signature2.jpg",
      price: "Call us for pricing"
    },
    {
      id: 3,
      title: "Lab grown Diamond Collection",
      description: "Tennis bracelet and Diamond Studs",
      image: "/signature3.png",
      price: "Call us for pricing"
    },
    {
      id: 4,
      title: "Pearl Elegance Collection",
      description: "Lustrous Bahraini pearls crafted into timeless designs",
      image: "/signature4.png",
      price: "Call us for pricing"
    }
  ];

  return (
    <ResponsiveSection 
      id="signature-pieces" 
      background="darker"
      className="overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow opacity-20" />
      
      <div className="relative">
        <SectionHeader 
          title="Signature Pieces"
          subtitle="Discover our most coveted collections, each piece meticulously crafted to perfection"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pieces.map((piece, index) => (
            <Card 
              key={piece.id}
              className="group glass-purple hover:soft-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <img 
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {piece.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    {piece.description}
                  </p>
                  <p className="lavender-accent font-medium">
                    {piece.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default SignaturePieces;
