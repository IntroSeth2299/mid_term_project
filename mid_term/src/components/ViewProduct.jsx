import { useParams } from "react-router-dom";

export default function ViewProduct({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  return (
    <div className="container mt-4">
      <h3 className="text-center">Product Details</h3>
      <table class="table text-center">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Telephone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.tel_num}</td>
    </tr>
    </tbody>
    </table>
    </div>
  );
}

