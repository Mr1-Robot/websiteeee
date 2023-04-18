import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const AddProduct = () => {
  const addProduct = (values) => {
    axios
      .post("https://fakestoreapi.com/products/", {
        title: values.title,
        description: values.description,
        image: values.imageUrl,
        category: values.category,
        price: values.price,
      })
      .then((res) => console.log(res.data));
  };

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  imageUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
  category: Yup.string().required("Category is required"),
});

  return (
    <div>
      <h1 className="text-center my-5">Add a Product</h1>

      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            imageUrl: "",
            category: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            addProduct(values);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-3 w-50 mx-auto">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  placeholder="Enter a Title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3 w-50 mx-auto">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter a Description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3 w-50 mx-auto">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL
                </label>
                <Field
                  type="url"
                  name="imageUrl"
                  className="form-control"
                  id="imageUrl"
                  placeholder="Enter URL of an image"
                />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3 w-50 mx-auto">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <Field
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="Enter a Price"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3 w-50 mx-auto">
                <Field
                  as="select"
                  className="form-select form-select-lg mb-3 SelectFont"
                  aria-label=".form-select-lg example"
                  name="category"
                  id="category"
                >
                  <option defaultValue>Select a Category</option>
                  <option value="women's clothing">women's clothing</option>
                  <option value="men's clothing">men's clothing</option>
                  <option value="jewelery">jewelery</option>
                  <option value="electronics">electronics</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-danger"
                />
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isSubmitting}
                >
                  Add Product
                </button>
                <Link to={"/products"} className="btn btn-primary mx-4"> Back to Products</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
