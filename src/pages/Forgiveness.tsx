import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

export default function Forgiveness() {
  const navigate = useNavigate();
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [showWomensDay, setShowWomensDay] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSecondPart(true), 2500);
    const timer2 = setTimeout(() => setShowWomensDay(true), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center"
      onClick={() => navigate('/')}
    >
      <div className="text-center p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Heart className="w-16 h-16 text-rose-500 mx-auto" />
        </motion.div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-rose-600 mb-6"
        >
          Forgives Easily
        </motion.h2>
        {showSecondPart && (
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-purple-800 mb-12"
          >
            but Struggles to Forget
          </motion.h2>
        )}
        {showWomensDay && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              bounce: 0.5, 
              duration: 1.2 
            }}
            className="mt-16"
          >
            <motion.div 
              className="flex justify-center mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Stars className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-transparent bg-clip-text"
            >
              Happy Women's Day!
            </motion.h1>
          </motion.div>
        )}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 6 }}
          className="mt-12 text-xl text-purple-600"
        >
          Click to start over...
        </motion.p>
      </div>
    </motion.div>
  );
}