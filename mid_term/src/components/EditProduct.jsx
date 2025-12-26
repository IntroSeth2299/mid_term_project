import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditProduct({ products, setProducts }) {
  const { id } = useParams();
  const product = products.find((u) => u.id == id) || { name: "", category: "", price: "", quantity: "", dateOfBuy: "" };
  const [edit, setEdit] = useState(product);
  const navigate = useNavigate();

  const update = () => {
    setProducts(products.map((u) => (u.id == id ? edit : u)));
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <h3>Edit Product</h3>
      <input className="form-control mb-2" placeholder="Name" value={edit.name}
        onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Category" value={edit.category}
        onChange={(e) => setEdit({ ...edit, category: e.target.value })} />
      <input className="form-control mb-2" placeholder="Price" type="number" value={edit.price}
        onChange={(e) => setEdit({ ...edit, price: e.target.value })} />
      <input className="form-control mb-2" placeholder="Quantity" type="number" value={edit.quantity}
        onChange={(e) => setEdit({ ...edit, quantity: e.target.value })} />
      <input className="form-control mb-2" placeholder="Date of Buy" type="date" value={edit.dateOfBuy}
        onChange={(e) => setEdit({ ...edit, dateOfBuy: e.target.value })} />
      <button onClick={update} className="btn btn-primary">Update</button>
    </div>
  );
}
