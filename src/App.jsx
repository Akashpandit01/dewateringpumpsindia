import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

// Import all product pages
import AK_15150_2P from './pages/products/AK_15150_2P';
import AK_1_5350_2P from './pages/products/AK_1_5350_2P'; // fixed name
import AK_15360_2P from './pages/products/AK_15360_2P';
import AK_2350_2P from './pages/products/AK_2350_2P';
import AK_3350_2P from './pages/products/AK_3350_2P';
import AK_6350_2P from './pages/products/AK_6350_2P';
import AK_8350_2P from './pages/products/AK_8350_2P';
import AK_8350h_2P from './pages/products/AK_8350h_2P';
import AK_10350_2P from './pages/products/AK_10350_2P';
import AK_15350_2P from './pages/products/AK_15350_2P'; // still here
import AK_35350m_L_2P from './pages/products/AK_35350m_L_2P';
import AK_Small_Series from './pages/products/AK_Small_Series';
import Technical_Specification from './pages/products/Technical_Specification';
import SK_3350_NC from './pages/products/SK_3350_NC';
import SK_6350_NC from './pages/products/SK_6350_NC';
import SK_8350_NC from './pages/products/SK_8350_NC';
import SK_10350_NC from './pages/products/SK_10350_NC';


function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        
        {/* Product pages */}
        <Route path="/products/AK-1-5150-2P" element={<AK_15150_2P />} />
      <Route path="/products/AK-1-5350-2P" element={<AK_1_5350_2P />} /> 
        <Route path="/products/AK-1-5360-2P" element={<AK_15360_2P />} />
        <Route path="/products/AK-2350-2P" element={<AK_2350_2P />} />
        <Route path="/products/AK-3350-2P" element={<AK_3350_2P />} />
        <Route path="/products/AK-6350-2P" element={<AK_6350_2P />} />
        <Route path="/products/AK-8350-2P" element={<AK_8350_2P />} />
        <Route path="/products/AK-8350h-2P" element={<AK_8350h_2P />} />
        <Route path="/products/AK-10350-2P" element={<AK_10350_2P />} />
      <Route path="/products/AK-15350-2P" element={<AK_15350_2P />} /> 
        <Route path="/products/AK-35350m-L-2P" element={<AK_35350m_L_2P />} />
        <Route path="/products/AK-Small-series" element={<AK_Small_Series />} />
        <Route path="/products/technical-specs" element={<Technical_Specification />} />
        <Route path="/products/SK-3350-NC" element={<SK_3350_NC />} />
        <Route path="/products/SK-6350-NC" element={<SK_6350_NC />} />
        <Route path="/products/SK-8350-NC" element={<SK_8350_NC />} />
        <Route path="/products/SK-10350-NC" element={<SK_10350_NC />} />

        <Route path="/services" element={<Services />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </>
  );
}

export default App;
