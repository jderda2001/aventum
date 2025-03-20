
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
          <h1 className="text-aventum-gold font-playfair text-3xl font-bold tracking-tight">Aventum</h1>
        </div>
        <p className="text-white/80 text-sm md:text-base font-light italic">
          Proste rozwiązania skomplikowanych problemów
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
