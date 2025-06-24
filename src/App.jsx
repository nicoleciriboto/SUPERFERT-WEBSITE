
import React, { useEffect } from 'react'; // ✅ Import useEffect
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// ✅ Fixed ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // ✅ Return null since this component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
