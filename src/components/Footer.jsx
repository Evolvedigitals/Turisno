
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Receba Ofertas Exclusivas</h3>
          <p className="mb-6 text-blue-100">Inscreva-se em nossa newsletter e seja o primeiro a saber sobre promoções e novos destinos</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              onClick={handleSocialClick}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Inscrever
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Aventura Turismo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Há mais de 15 anos criando experiências únicas e inesquecíveis para nossos clientes. 
              Sua próxima aventura começa aqui!
            </p>
            <div className="flex space-x-4">
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/#destinos" className="text-gray-400 hover:text-white transition-colors">Destinos</Link></li>
              <li><Link to="/#pacotes" className="text-gray-400 hover:text-white transition-colors">Pacotes</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Nossos Serviços</span>
            <ul className="space-y-2 text-gray-400">
              <li>Pacotes Nacionais</li>
              <li>Viagens Internacionais</li>
              <li>Turismo de Aventura</li>
              <li>Lua de Mel</li>
              <li>Turismo Corporativo</li>
              <li>Seguro Viagem</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Rua das Aventuras, 123<br />São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">contato@aventuraturismo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aventura Turismo. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={handleSocialClick} className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </button>
            <button onClick={handleSocialClick} className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
