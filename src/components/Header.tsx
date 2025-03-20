
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="w-full py-6 px-8 flex justify-center items-center bg-white/5 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/lovable-uploads/ee73c2ad-ba6e-488c-8bdc-54961689150a.png" 
              alt="Aventum Logo" 
              className="h-12 md:h-14 object-contain"
            />
          </motion.div>
        </div>
        <p className="text-white/80 text-sm md:text-base font-light italic">
          <span className="text-aventum-gold">"Pacta sunt servanda</span> – umów należy dotrzymywać"
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
