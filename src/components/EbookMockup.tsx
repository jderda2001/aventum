
import React from 'react';
import { motion } from 'framer-motion';

const EbookMockup = () => {
  return (
    <motion.div 
      className="relative w-[280px] md:w-[320px] h-[400px] md:h-[450px]"
      initial={{ opacity: 0, y: 20, rotateY: 25 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.4,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        transition: { duration: 0.3 } 
      }}
    >
      <img 
        src="/lovable-uploads/89cb3880-a6b0-4ecf-9fc8-752c8628d2b4.png" 
        alt="Ebook: Najważniejsze zmiany prawne dla przedsiębiorców 2025" 
        className="h-full w-full object-contain rounded-xl shadow-2xl"
      />
      
      {/* Adding a subtle reflection effect */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent rounded-b-xl"></div>
    </motion.div>
  );
};

export default EbookMockup;
