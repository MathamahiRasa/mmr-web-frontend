import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/HomePage/Footer";
import Homepage from "./components/HomePage/Homepage";
import Products from "./components/Products/Products";
import Navbar from "./components/HomePage/Navbar";
import ProductDetailPage from "./components/Products/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
