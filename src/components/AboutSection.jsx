
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, Heart, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50.000+",
      label: "Clientes Satisfeitos",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      number: "150+",
      label: "Destinos Únicos",
      color: "text-green-600"
    },
    {
      icon: Award,
      number: "15",
      label: "Anos de Experiência",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Taxa de Satisfação",
      color: "text-red-600"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Viaje com tranquilidade. Todos os nossos pacotes incluem seguro completo e suporte 24h."
    },
    {
      icon: Heart,
      title: "Experiências Únicas",
      description: "Criamos momentos inesquecíveis com atividades exclusivas e roteiros personalizados."
    },
    {
      icon: Clock,
      title: "Suporte Completo",
      description: "Nossa equipe está sempre disponível para garantir que sua viagem seja perfeita."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            Sobre <span className="text-gradient">Nossa Missão</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos transformamos sonhos em realidade, criando experiências 
            de viagem únicas e inesquecíveis para nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Criando Memórias que Duram para Sempre
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nossa paixão é conectar pessoas a lugares extraordinários. Acreditamos que viajar 
              é mais do que visitar destinos - é sobre descobrir culturas, criar conexões e 
              expandir horizontes.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Com uma equipe de especialistas apaixonados por viagens, oferecemos experiências 
              autênticas e personalizadas que superam expectativas. Cada detalhe é cuidadosamente 
              planejado para garantir que sua jornada seja única e inesquecível.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  
                className="w-full h-96 object-cover"
                alt="Equipe da Aventura Turismo planejando viagens"
               src="https://images.unsplash.com/photo-1520689959078-96bb813dad39" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Certificação</p>
                  <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
