import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const SingleProduct = ({ products }) => {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
      {products.length !== 0 ? (
        products.map((item) => (
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
              <p className="card-text">{item.description.slice(0, 150)}..</p>
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
  );
};

export default SingleProduct;
