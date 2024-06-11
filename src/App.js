import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Products from "./components/Products/Products";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import ShoppingCart from "./components/Products/ShoppingCart";
import Nav from "./components/HomePage/Nav";
import Profile from "./components/user/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ShoppingCart />
      </BrowserRouter>
    </div>
  );
}

export default App;
