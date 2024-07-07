import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Products from "./components/Products/Products";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import Profile from "./components/user/Profile";
import Account from "./components/Account/Account";
import OrderHistory from "./components/Account/Orders/OrderHistory";
import DetailedOrderInfo from "./components/Account/Orders/DetailedOrderInfo";
import About from "./components/About/About";
import Navbar from "./components/NavBar/Navbar";
import ShoppingCart from "./components/Cart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/orderHistoryPage" element={<OrderHistory />} />
          <Route path="/orderpage/:id" element={<DetailedOrderInfo />} />
        </Routes>
        <ShoppingCartWrapper />
      </BrowserRouter>
    </div>
  );
}

const ShoppingCartWrapper = () => {
  const location = useLocation();
  const isIconDisable =
    location.pathname === "/about" ||
    location.pathname === "/profile" ||
    location.pathname === "/account";

  return !isIconDisable && <ShoppingCart />;
};

export default App;
