import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./agritrade/ProductList";
import ProductDetail from "./agritrade/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
