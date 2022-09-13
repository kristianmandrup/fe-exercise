import { useEffect } from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Products } from "./Products";

function App() {
  useEffect(() => {
    const request = async () => {
      // api call here
    };
    request();
  });

  return (
    <div className="App">
      <Navigation />
      <Products />
    </div>
  );
}

export default App;
