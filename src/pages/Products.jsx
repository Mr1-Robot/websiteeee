import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("NetworkError");

  function getProducts() {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        setError(err);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(error);
  return (
    <div>
      <h1 className="text-center my-5">Products</h1>
      <Link to={"/products/addProduct"} className="btn btn-success mb-4 mx-4">
        Add a Product +
      </Link>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
