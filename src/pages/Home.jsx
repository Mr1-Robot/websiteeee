import img1 from "../assets/images/img-1.jpg";
import img3 from "../assets/images/img-3.jpg";
import img2 from "../assets/images/img-2.jpg";

const Home = () => {
  return (
    <main>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ objectFit: "cover" }}
              src={img1}
              className="d-block w-100"
              height={600}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ objectFit: "cover" }}
              src={img2}
              className="d-block w-100"
              height={600}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ objectFit: "cover" }}
              src={img3}
              className="d-block w-100"
              height={600}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Home;
