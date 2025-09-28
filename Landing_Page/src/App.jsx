// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // 1. Importa el nuevo Layout
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import QR from './pages/QR';

function App() {
  return (
    <Routes>
      {/* 2. Crea una ruta "padre" que usa el Layout como su elemento */}
      <Route path="/" element={<Layout />}>
        {/* 3. Anida las páginas dentro. Estas se renderizarán en el <Outlet /> */}
        <Route index element={<Home />} /> {/* "index" marca esta como la ruta por defecto para "/" */}
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="qr" element={<QR />} />
      </Route>
    </Routes>
  );
}

export default App;
