
import React from 'react';
import { motion } from 'framer-motion';

const EbookMockup = () => {
  return (
    <motion.div 
      className="relative w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-xl glass shimmer"
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
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aventum-navy/80 via-aventum-navy/50 to-aventum-navy/80"></div>
        <div className="h-full w-full flex flex-col justify-between p-6 relative">
          <div>
            <motion.div 
              className="w-16 h-1.5 bg-aventum-gold rounded mb-8"
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <h3 className="text-lg font-bold font-playfair text-aventum-gold mb-2">AVENTUM</h3>
            <h2 className="text-white text-2xl font-bold leading-tight mb-4">
              NAJWAŻNIEJSZE ZMIANY PRAWNE DLA PRZEDSIĘBIORCÓW
            </h2>
            <p className="text-white/80 text-sm">Wydanie 2025</p>
          </div>
          
          <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Array(6).fill(0).map((_, i) => (
                <motion.div 
                  key={i}
                  className="h-1 bg-white/20 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3, delay: 1 + (i * 0.1) }}
                />
              ))}
            </div>
            <div className="h-0.5 w-full bg-aventum-gold/50 rounded mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs">Aventum Legal</span>
              <span className="text-aventum-gold text-xs font-semibold">2025</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EbookMockup;
