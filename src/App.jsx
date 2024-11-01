import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import { ProductList } from "./pages/ProductList";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/ProfileInfo";
import Order from "./pages/Order";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="orders" element={<Order />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
