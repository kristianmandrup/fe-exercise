import { useEffect, useState } from "react";
import { api } from "./api";
import "./App.css";
import { Navigation } from "./Navigation";
import { Product } from "./Product";
import { Products } from "./Products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const request = async () => {
      const data = await api.data();
      setProducts(data);
    };
    request();
  });

  return (
    <div className="App">
      <Navigation />
      <Products products={products} />
    </div>
  );
}

export default App;
