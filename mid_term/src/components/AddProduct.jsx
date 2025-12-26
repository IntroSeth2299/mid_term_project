import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ products, setProducts }) {
  const [product, setProduct] = useState({ name: "", category: "", price: "", quantity: "", dateOfBuy: "" });
  const navigate = useNavigate();

  const submit = () => {
    setProducts([...products, { ...product, id: Date.now() }]);
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <h3>Add Product</h3>
      <input className="form-control mb-2" placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })} />
      <input className="form-control mb-2" placeholder="Price" type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      <input className="form-control mb-2" placeholder="Quantity" type="number"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />
      <input className="form-control mb-2" placeholder="Date of Buy" type="date"
        value={product.dateOfBuy}
        onChange={(e) => setProduct({ ...product, dateOfBuy: e.target.value })} />
      <button onClick={submit} className="btn btn-outline-secondary btn-sm me-1">Save</button>
    </div>
  );
}
