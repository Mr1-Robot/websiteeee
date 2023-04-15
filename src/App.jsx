import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
