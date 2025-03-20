
import React from 'react';
import { motion } from 'framer-motion';
import EbookMockup from './EbookMockup';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      className="w-full px-6 md:px-8 py-8 md:py-12 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight font-playfair">
              NAJWAŻNIEJSZE ZMIANY PRAWNE DLA PRZEDSIĘBIORCÓW 2025
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Rok 2025 przynosi szereg istotnych zmian prawnych, które będą miały bezpośredni wpływ na prowadzenie Twojej działalności gospodarczej.
            </p>
          </motion.div>

          <motion.div 
            className="pt-4 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-aventum-gold text-xl font-semibold">W e-booku znajdziesz:</h3>
            <ul className="space-y-3">
              {[
                "Elektroniczne doręczenia - nowe zasady komunikacji z urzędami",
                "Metoda kasowa w PIT - korzyści dla przedsiębiorców",
                "Zmiany w zasadach amortyzacji środków trwałych",
                "Nowe obowiązki w zakresie ochrony danych osobowych"
              ].map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <span className="text-aventum-gold font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4"
          >
            <a href="tel:+48123456789" className="flex items-center gap-2 text-white hover:text-aventum-gold transition-colors">
              <Phone size={18} className="text-aventum-gold" />
              <span>+48 123 456 789</span>
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center">
          <EbookMockup />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
