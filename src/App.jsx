import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import "./App.css";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/products/addProduct" element={<AddProduct />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
