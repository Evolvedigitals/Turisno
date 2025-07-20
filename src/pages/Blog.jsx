
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const blogPosts = [
    {
      id: 1,
      title: "10 Destinos Imperdíveis para 2024",
      excerpt: "Descubra os lugares mais incríveis que você precisa visitar neste ano. De praias paradisíacas a montanhas majestosas.",
      author: "Maria Silva",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Destinos",
      image: "Tropical paradise beach with crystal clear water and palm trees"
    },
    {
      id: 2,
      title: "Dicas Essenciais para Viagem Internacional",
      excerpt: "Tudo que você precisa saber antes de embarcar em sua próxima aventura internacional. Documentos, dicas e muito mais.",
      author: "João Santos",
      date: "12 de Janeiro, 2024",
      readTime: "8 min",
      category: "Dicas",
      image: "Airport terminal with travelers and departure boards"
    },
    {
      id: 3,
      title: "Turismo de Aventura: Adrenalina Garantida",
      excerpt: "Para os amantes de emoção, separamos as melhores atividades de aventura ao redor do mundo.",
      author: "Ana Costa",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      category: "Aventura",
      image: "Mountain climber on a rocky cliff with scenic valley view"
    },
    {
      id: 4,
      title: "Gastronomia Mundial: Sabores que Encantam",
      excerpt: "Uma jornada pelos sabores mais exóticos e deliciosos do mundo. Descubra pratos típicos de cada destino.",
      author: "Carlos Mendes",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      category: "Gastronomia",
      image: "Colorful local street food market with various dishes"
    },
    {
      id: 5,
      title: "Viagem Sustentável: Como Viajar Conscientemente",
      excerpt: "Aprenda como fazer turismo de forma responsável e sustentável, preservando os destinos para futuras gerações.",
      author: "Lucia Oliveira",
      date: "5 de Janeiro, 2024",
      readTime: "9 min",
      category: "Sustentabilidade",
      image: "Eco-friendly resort surrounded by lush green forest"
    },
    {
      id: 6,
      title: "Lua de Mel dos Sonhos: Destinos Românticos",
      excerpt: "Os lugares mais românticos do mundo para celebrar o amor. Destinos perfeitos para casais apaixonados.",
      author: "Roberto Lima",
      date: "3 de Janeiro, 2024",
      readTime: "4 min",
      category: "Romance",
      image: "Romantic sunset dinner on a beach with candles"
    }
  ];

  const categories = ["Todos", "Destinos", "Dicas", "Aventura", "Gastronomia", "Sustentabilidade", "Romance"];

  return (
    <div className="pt-32 pb-16">
      <Helmet>
        <title>Blog de Viagens - Aventura Turismo</title>
        <meta name="description" content="Descubra dicas de viagem, destinos incríveis e histórias inspiradoras em nosso blog. Tudo sobre turismo e aventuras pelo mundo." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog de Viagens</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Inspire-se com nossas histórias, dicas e guias de viagem para sua próxima aventura
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                onClick={handleReadMore}
                className="rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="blog-card rounded-xl shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img  
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    alt={`Blog post: ${post.title}`}
                   src="https://images.unsplash.com/photo-1606498679340-0aec3185edbd" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button
                    onClick={handleReadMore}
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não Perca Nenhuma Novidade!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Receba nossos posts mais recentes e dicas exclusivas de viagem diretamente no seu e-mail
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                onClick={handleReadMore}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Inscrever
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
