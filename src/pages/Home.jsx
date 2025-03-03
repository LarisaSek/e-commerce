import { useEffect, useState } from "react";
import { fetchProducts } from "../data/api";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container">
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
