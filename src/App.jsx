import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './Template/Template';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Contact from './Pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;