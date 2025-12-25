import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/ViewProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) setProducts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} setProducts={setProducts} />} />
        <Route path="/add" element={<AddProduct products={products} setProducts={setProducts} />} />
        <Route path="/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
        <Route path="/view/:id" element={<ViewProduct products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
