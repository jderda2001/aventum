
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, FileText } from 'lucide-react';

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
            src="/lovable-uploads/08a9fa85-20c5-4e9c-b1ef-957b5825aa04.png" 
            alt="Aventum Logo" 
            className="h-10 w-auto mr-3 hidden md:block"
          />
          <div>
            <h3 className="text-aventum-gold font-playfair text-xl font-bold">Aventum</h3>
            <p className="text-white/70 text-sm mt-1">
              Kancelaria Prawna Radców Prawnych i Adwokatów Malik, Pokoj i Partnerzy Sp.p.
            </p>
            <div className="text-xs text-white/50 mt-1 flex flex-wrap gap-x-4">
              <span>NIP: 6423215030</span>
              <span>KRS: 0000886626</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-aventum-gold" />
            <span>+48 882 878 691</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-aventum-gold" />
            <span>biuro@aventum-kancelaria.pl</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-aventum-gold" />
            <span>ul. Sądowa 4/6, 40-078 Katowice</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
