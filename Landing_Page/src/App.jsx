import { Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './components/Layout';

// Páginas Públicas
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import QR from './pages/QR';

// Páginas Legales
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

function App() {
  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="qr" element={<QR />} />
        <Route path="privacidad" element={<Privacy />} />
        <Route path="terminos" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />
      </Route>
    </Routes>
  );
}

export default App;
