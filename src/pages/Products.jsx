import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => console.log(res.data));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductsList />
    </div>
  );
};

export default Products;
