
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-aventum-navy flex flex-col">
        <motion.div 
          className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-black/30 to-transparent z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.div
          className="fixed -top-[40%] -right-[30%] w-[70%] h-[70%] rounded-full bg-aventum-gold/5 blur-[100px] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        <motion.div
          className="fixed top-[60%] -left-[30%] w-[60%] h-[60%] rounded-full bg-aventum-gold/5 blur-[100px] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        
        <div className="relative z-10 flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 flex flex-col items-center py-4 md:py-10">
            <Hero />
            <LeadForm />
          </main>
          
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
