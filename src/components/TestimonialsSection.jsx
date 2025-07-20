
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria e João Silva",
      location: "São Paulo, SP",
      trip: "Lua de Mel nas Maldivas",
      rating: 5,
      text: "Nossa lua de mel foi simplesmente perfeita! A Aventura Turismo cuidou de cada detalhe, desde o voo até as atividades no resort. Vivemos momentos mágicos que levaremos para sempre em nossos corações.",
      image: "Happy couple on their honeymoon at a tropical beach resort"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      trip: "Aventura no Peru",
      rating: 5,
      text: "A trilha para Machu Picchu foi uma experiência transformadora! O guia era excepcional e toda a logística funcionou perfeitamente. Recomendo a Aventura Turismo para quem busca aventuras autênticas.",
      image: "Solo traveler hiking in the mountains with backpack and trekking gear"
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      trip: "Europa Clássica",
      rating: 5,
      text: "Minha primeira viagem internacional foi incrível! Visitei Paris, Roma e Barcelona com total tranquilidade. O suporte da equipe foi fundamental para que eu aproveitasse cada momento sem preocupações.",
      image: "Woman tourist taking photos in front of European landmarks"
    },
    {
      id: 4,
      name: "Roberto e Lucia Lima",
      location: "Brasília, DF",
      trip: "Safari na África",
      rating: 5,
      text: "O safari no Quênia superou todas as nossas expectativas! Ver os animais em seu habitat natural foi emocionante. A organização foi impecável e os guias locais eram muito conhecedores.",
      image: "Couple on safari watching elephants in African savanna"
    },
    {
      id: 5,
      name: "Fernanda Oliveira",
      location: "Porto Alegre, RS",
      trip: "Japão Cultural",
      rating: 5,
      text: "Sempre sonhei em conhecer o Japão e a experiência foi ainda melhor do que imaginava! A imersão cultural foi profunda e aprendi muito sobre a história e tradições japonesas.",
      image: "Woman in traditional Japanese garden with cherry blossoms"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Testemunhos de <span className="text-blue-400">Viajantes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra o que nossos clientes dizem sobre suas experiências conosco. 
            Cada história é uma prova do nosso compromisso com a excelência.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card rounded-2xl p-8 md:p-12 text-center relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-blue-200 opacity-50">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img  
                    className="w-full h-full object-cover"
                    alt={`Cliente: ${testimonials[currentTestimonial].name}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].trip}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <h5 className="font-semibold text-white">{testimonial.name}</h5>
              <p className="text-blue-300 text-sm">{testimonial.trip}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
