
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="w-full px-6 md:px-8 py-8 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center text-center md:text-left">
          <img 
            src="/lovable-uploads/7be79855-c373-4b95-9a81-683f298bbdff.png" 
            alt="Aventum Logo" 
            className="h-10 w-auto mr-3 hidden md:block"
          />
          <div>
            <h3 className="text-aventum-gold font-playfair text-xl font-bold">Aventum</h3>
            <p className="text-white/70 text-sm mt-1">© {new Date().getFullYear()} Kancelaria Prawna Aventum. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-aventum-gold" />
            <span>+48 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-aventum-gold" />
            <span>kontakt@aventum.pl</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-aventum-gold" />
            <span>Warszawa, ul. Prawnicza 123</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
