import { Link } from "react-router-dom";

export default function ProductList({ products, setProducts }) {
  const deleteUser = (id) => {
    setProducts(products.filter((u) => u.id !== id));
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date of Buy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.category}</td>
              <td>{u.price}</td>
              <td>{u.quantity}</td>
              <td>{u.dateOfBuy}</td>
              <td>
                <Link to={`/view/${u.id}`} className="btn btn-primary btn-sm me-1">View</Link>
                <Link to={`/edit/${u.id}`} className="btn btn-outline-secondary btn-sm me-1">Edit</Link>
                <button onClick={() => deleteUser(u.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr><td colSpan="7">No Products</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
