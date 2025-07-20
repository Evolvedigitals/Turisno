
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PackagesSection = () => {
  const { toast } = useToast();

  const handlePackageClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const packages = [
    {
      id: 1,
      title: "Lua de Mel dos Sonhos",
      destination: "Maldivas + Dubai",
      duration: "10 dias / 9 noites",
      people: "2 pessoas",
      rating: 4.9,
      reviews: 156,
      originalPrice: "R$ 18.500",
      price: "R$ 15.900",
      discount: "14% OFF",
      image: "Romantic couple on a pristine beach at sunset with overwater bungalows",
      features: [
        "Voos internacionais inclusos",
        "Hospedagem 5 estrelas",
        "Café da manhã e jantar",
        "Transfer privativo",
        "Seguro viagem completo"
      ],
      highlight: "Mais Vendido"
    },
    {
      id: 2,
      title: "Aventura Andina",
      destination: "Peru + Bolívia",
      duration: "8 dias / 7 noites",
      people: "Até 12 pessoas",
      rating: 4.8,
      reviews: 89,
      originalPrice: "R$ 8.200",
      price: "R$ 6.900",
      discount: "16% OFF",
      image: "Hikers trekking through colorful mountain landscapes in the Andes",
      features: [
        "Guia especializado",
        "Hospedagem boutique",
        "Todas as refeições",
        "Equipamentos inclusos",
        "Transporte 4x4"
      ],
      highlight: "Aventura"
    },
    {
      id: 3,
      title: "Europa Clássica",
      destination: "Paris + Roma + Barcelona",
      duration: "12 dias / 11 noites",
      people: "2-4 pessoas",
      rating: 4.7,
      reviews: 234,
      originalPrice: "R$ 14.800",
      price: "R$ 12.500",
      discount: "16% OFF",
      image: "Iconic European landmarks including Eiffel Tower and Colosseum",
      features: [
        "Voos e trens inclusos",
        "Hotéis centrais 4 estrelas",
        "City tours guiados",
        "Ingressos para atrações",
        "Suporte 24h"
      ],
      highlight: "Cultural"
    }
  ];

  return (
    <section id="pacotes" className="py-20 bg-white">
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
            Pacotes <span className="text-gradient">Especiais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofertas exclusivas com tudo incluído. Pacotes cuidadosamente planejados 
            para garantir a melhor experiência com o melhor custo-benefício.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card-hover bg-white rounded-2xl shadow-xl overflow-hidden ${
                index === 0 ? 'lg:scale-105 border-2 border-blue-200' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Pacote: ${pkg.title} - ${pkg.destination}`}
                 src="https://images.unsplash.com/photo-1625496784769-5b5f18456f7e" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.discount}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.highlight}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{pkg.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{pkg.destination}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{pkg.people}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 line-through mr-2">{pkg.originalPrice}</span>
                  <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-sm text-gray-600 ml-1">por pessoa</span>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{pkg.rating} ({pkg.reviews} avaliações)</span>
                  </div>
                </div>

                <Button
                  onClick={handlePackageClick}
                  className="w-full btn-gradient text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Reservar Agora</span>
                  <ArrowRight className="w-4 h-4" />
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
          <p className="text-gray-600 mb-6">
            Não encontrou o pacote ideal? Criamos experiências personalizadas para você!
          </p>
          <Button
            onClick={handlePackageClick}
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Criar Pacote Personalizado
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
