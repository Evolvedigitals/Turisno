
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Aventura Turismo - Descubra o Mundo Conosco</title>
          <meta name="description" content="Agência de turismo especializada em experiências únicas. Descubra destinos incríveis, pacotes personalizados e aventuras inesquecíveis pelo mundo." />
        </Helmet>
        
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
