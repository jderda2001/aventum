
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="w-full py-6 px-8 flex justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/08a9fa85-20c5-4e9c-b1ef-957b5825aa04.png" 
            alt="Aventum Logo" 
            className="h-16 w-auto mr-3"
          />
          <div className="flex flex-col">
            <h1 className="text-aventum-gold font-playfair text-3xl font-bold tracking-tight">Aventum</h1>
            <span className="text-aventum-gold text-sm">Kancelaria Prawna</span>
          </div>
        </div>
        <p className="text-white/80 text-sm md:text-base font-light italic">
          Proste rozwiązania skomplikowanych problemów
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
