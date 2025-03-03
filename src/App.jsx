import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductPage />} /> {/* ✅ Correct path */}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order-confirmation" element={<OrderPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;
