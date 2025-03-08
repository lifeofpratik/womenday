import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

export default function LoyalKind() {
  const navigate = useNavigate();
  const [showSecondPart, setShowSecondPart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondPart(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center"
      onClick={() => navigate('/forgiveness')}
    >
      <div className="text-center p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-12"
        >
          <Flower className="w-16 h-16 text-purple-500 mx-auto" />
        </motion.div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold text-purple-600 mb-6"
        >
          Loyal & Kind
        </motion.h2>
        {showSecondPart && (
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-rose-600"
          >
            but Easily Hurt
          </motion.h2>
        )}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 text-xl text-purple-600"
        >
          Click to continue...
        </motion.p>
      </div>
    </motion.div>
  );
}