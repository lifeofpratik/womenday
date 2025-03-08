import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome';
import ChildishHeart from './pages/ChildishHeart';
import LoyalKind from './pages/LoyalKind';
import Forgiveness from './pages/Forgiveness';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/childish-heart" element={<ChildishHeart />} />
          <Route path="/loyal-kind" element={<LoyalKind />} />
          <Route path="/forgiveness" element={<Forgiveness />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;