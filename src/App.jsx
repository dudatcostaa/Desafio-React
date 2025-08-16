import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Footer from './components/Footer';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Depoimentos from './pages/Depoimentos';
import Shop from './pages/Shop';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}