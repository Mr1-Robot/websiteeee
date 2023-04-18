import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const ProductDetails = () => {
  const apiUrl = import.meta.env.VITE_API_KEY;

  const param = useParams();
  const { productID } = param;

  const [productDetails, setProductDetails] = useState([]);

  function getSingleProduct() {
    axios
      .get(`${apiUrl}/products/${productID}`)
      .then((res) => setProductDetails([res.data]));
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1 className="text-center my-5">Product #{productID} Details </h1>

      <div>
        {productDetails.length !== 0 ? (
          productDetails.map((item) => (
            <div
              key={item.id}
              className="card mx-auto my-5 p-4 d-flex "
              style={{ maxWidth: "60rem" }}
            >
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {item.rating.rate}
                      </small>
                    </p>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="buttons d-flex gap-4 justify-content-center my-5">
                    <button className="btn btn-success">Add to cart</button>
                    <Link to={"/products"} className="btn btn-primary">
                      Back to products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="d-flex align-items-center justify-content-center mb-4">
            <h4>Loading</h4>
            <ReactLoading type="bubbles" color="#000" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
