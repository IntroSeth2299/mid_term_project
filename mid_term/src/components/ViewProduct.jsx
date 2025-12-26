import { useParams } from "react-router-dom";

export default function ViewProduct({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);
  if (!product) {
    return (
      <div className="container mt-4">
        <h3>Product not found</h3>
        <p>The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center">Product Details</h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Date of Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.dateOfBuy}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

