
import { Card, CardContent } from '@/components/ui/card';

const SignaturePieces = () => {
  const pieces = [
    {
      id: 1,
      title: "Pearl Elegance Collection",
      description: "Lustrous pearls crafted into timeless designs",
      image: "/signature1.png",
      price: "Call us for pricing"
    },
    {
      id: 2,
      title: "Diamond Heritage Ring",
      description: "Exquisite diamond rings for special occasions",
      image: "/signature2.jpg",
      price: "Call us for pricing"
    },
    {
      id: 3,
      title: "Gold Statement Necklace",
      description: "Bold gold designs that make a statement",
      image: "/signature3.png",
      price: "Call us for pricing"
    },
    {
      id: 4,
      title: "Custom Gemstone Pieces",
      description: "Personalized designs with precious gemstones",
      image: "/signature4.png",
      price: "Call us for pricing"
    }
  ];

  return (
    <section id="signature-pieces" className="py-20 bg-gradient-to-br from-jewelry-purple-darker via-background to-jewelry-indigo relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light font-inter mb-8 text-white">
            Signature Pieces
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our most coveted collections, each piece meticulously crafted to perfection
          </p>
        </div>

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
    </section>
  );
};

export default SignaturePieces;
