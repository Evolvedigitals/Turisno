
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DestinationsSection = () => {
  const { toast } = useToast();

  const handleDestinationClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const destinations = [
    {
      id: 1,
      name: "Maldivas",
      country: "Oceano Índico",
      rating: 4.9,
      reviews: 1250,
      price: "A partir de R$ 8.500",
      image: "Luxury overwater bungalows in Maldives with crystal clear blue water",
      description: "Paraíso tropical com águas cristalinas e resorts de luxo"
    },
    {
      id: 2,
      name: "Santorini",
      country: "Grécia",
      rating: 4.8,
      reviews: 980,
      price: "A partir de R$ 6.200",
      image: "White and blue buildings of Santorini overlooking the Aegean Sea",
      description: "Ilha grega com arquitetura única e pôr do sol deslumbrante"
    },
    {
      id: 3,
      name: "Bali",
      country: "Indonésia",
      rating: 4.7,
      reviews: 1580,
      price: "A partir de R$ 4.800",
      image: "Lush green rice terraces in Bali with traditional temples",
      description: "Cultura exótica, templos sagrados e paisagens tropicais"
    },
    {
      id: 4,
      name: "Machu Picchu",
      country: "Peru",
      rating: 4.9,
      reviews: 2100,
      price: "A partir de R$ 3.500",
      image: "Ancient Machu Picchu ruins with misty mountains in background",
      description: "Cidade perdida dos incas nas montanhas dos Andes"
    },
    {
      id: 5,
      name: "Dubai",
      country: "Emirados Árabes",
      rating: 4.6,
      reviews: 1890,
      price: "A partir de R$ 5.900",
      image: "Dubai skyline with Burj Khalifa and modern skyscrapers at sunset",
      description: "Cidade futurística com luxo e arquitetura impressionante"
    },
    {
      id: 6,
      name: "Patagônia",
      country: "Argentina/Chile",
      rating: 4.8,
      reviews: 750,
      price: "A partir de R$ 7.200",
      image: "Dramatic Patagonian landscape with glaciers and mountain peaks",
      description: "Natureza selvagem com geleiras e montanhas majestosas"
    }
  ];

  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-gradient">Destinos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra lugares incríveis ao redor do mundo. Cada destino é cuidadosamente selecionado 
            para proporcionar experiências únicas e inesquecíveis.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={handleDestinationClick}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Destino: ${destination.name}, ${destination.country}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="destination-overlay absolute inset-0"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{destination.price}</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-1 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{destination.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{destination.rating}</span>
                    <span className="text-gray-500">({destination.reviews} avaliações)</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{destination.description}</p>

                <Button
                  onClick={handleDestinationClick}
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group/btn"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            onClick={handleDestinationClick}
            size="lg"
            className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Ver Todos os Destinos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
