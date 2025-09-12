import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Certificates from "./pages/Certificates";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pulses from "./pages/products/Pulses";
import Spices from "./pages/products/Spices";
import Cereals from "./pages/products/Cereals";
import Vegetables from "./pages/products/Vegetables";
import Fruits from "./pages/products/Fruits";
import DryFruits from "./pages/products/DryFruits";
import Herbs from "./pages/products/Herbs";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/pulses" element={<Pulses />} />
          <Route path="/products/spices" element={<Spices />} />
          <Route path="/products/cereals" element={<Cereals />} />
          <Route path="/products/vegetables" element={<Vegetables />} />
          <Route path="/products/fruits" element={<Fruits />} />
          <Route path="/products/dry-fruits" element={<DryFruits />} />
          <Route path="/products/herbs" element={<Herbs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;