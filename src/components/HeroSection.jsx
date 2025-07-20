
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    travelers: ''
  });

  const slides = [
    {
      title: "Descubra Paraísos Inexplorados",
      subtitle: "Aventuras únicas em destinos de tirar o fôlego",
      image: "Stunning tropical beach with crystal clear turquoise water and white sand"
    },
    {
      title: "Montanhas que Tocam o Céu",
      subtitle: "Experiências inesquecíveis nas alturas",
      image: "Majestic mountain landscape with snow-capped peaks and alpine lake"
    },
    {
      title: "Cidades que Contam Histórias",
      subtitle: "Mergulhe na cultura e tradições locais",
      image: "Historic European city with cobblestone streets and ancient architecture"
    },
    {
      title: "Aventuras Selvagens",
      subtitle: "Conecte-se com a natureza em sua forma mais pura",
      image: "African safari with elephants walking across savanna at sunset"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img  
            className="w-full h-full object-cover"
            alt={`Hero slide ${currentSlide + 1}: ${slides[currentSlide].title}`}
           src="https://images.unsplash.com/photo-1691527385266-62295bbcabb1" />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    Destino
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="destination"
                      value={searchData.destination}
                      onChange={handleInputChange}
                      placeholder="Para onde vamos?"
                      className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    Data
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="date"
                      value={searchData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    Viajantes
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="travelers"
                      value={searchData.travelers}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/90 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Quantos?</option>
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5+">5+ pessoas</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="btn-gradient text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 h-12"
                >
                  <Search className="w-5 h-5" />
                  <span>Buscar</span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleSearch}
              size="lg"
              className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Explorar Destinos
            </Button>
            <Button
              onClick={handleSearch}
              variant="outline"
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Ver Pacotes
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
