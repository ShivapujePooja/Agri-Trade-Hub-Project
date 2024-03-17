import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./agritrade/ProductList";
import ProductDetail from "./agritrade/ProductDetail";
import SellerForm from "./agritrade/SellerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sell" element={<SellerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
