import axios from "axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ProductsList from "../components/ProductsList";
import { Link } from "react-router-dom";

const Categories = () => {
  const apiUrl = import.meta.env.VITE_API_KEY;

  const [cat, setCat] = useState([]);
  const [catName, setCatName] = useState("jewelery");
  const [productsInCat, setProductsInCat] = useState([]);

  function getCategories() {
    axios.get(`${apiUrl}/products/categories`).then((res) => setCat(res.data));
  }

  useEffect(() => {
    getCategories();
  }, []);

  function getInCategories() {
    axios
      .get(`${apiUrl}/products/category/${catName}`)
      .then((res) => setProductsInCat(res.data));
  }

  useEffect(() => {
    getInCategories();
  }, [catName]);

  console.log(productsInCat);
  return (
    <div>
      <h1 className="text-center my-5">Categories</h1>
      <div className="d-flex justify-content-center gap-4 mb-5">
        {cat.length !== 0 ? (
          cat.map((item, i) => (
            <button
              onClick={() => setCatName(item)}
              key={i}
              className="rounded p-4 text-white CatHeading"
            >
              {item}
            </button>
          ))
        ) : (
          <div className="d-flex align-items-center justify-content-center mb-4">
            <h4>Loading</h4>
            <ReactLoading type="bubbles" color="#000" />
          </div>
        )}
      </div>

      <div>
        <h1 className="text-center mb-5">
          Products of <span className="CatName p-4 text-white">{catName}</span>
        </h1>

        <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
          {productsInCat.length !== 0 ? (
            productsInCat.map((item) => (
              <div
                key={item.id}
                className="card d-flex flex-column justify-content-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={item.image}
                  className=""
                  width={200}
                  alt={item.title}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description.slice(0, 150)}..
                  </p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center">
              <h4>Loading</h4> <ReactLoading type="bubbles" color="#000" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
