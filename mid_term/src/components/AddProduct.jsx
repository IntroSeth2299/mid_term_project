import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ products, setProducts }) {
  const [product, setProduct] = useState({ name: "", category: "", tel_num: "" });
  const navigate = useNavigate();

  const submit = () => {
    setProducts([...products, { ...product, id: Date.now() }]);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>
      <input className="form-control mb-2" placeholder="Name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Category"
        onChange={(e) => setProduct({ ...product, category: e.target.value })} />
      <input className="form-control mb-2" placeholder="Telephone Number"
        onChange={(e) => setProduct({ ...product, tel_num: e.target.value })} />
      <button onClick={submit} className="btn btn-primary">Save</button>
    </div>
  );
}
