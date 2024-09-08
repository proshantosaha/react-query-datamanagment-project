import React from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <div className="flex my-2">
      <AddProduct />

      <ProductList />

      <ProductDetail id={1} />
    </div>
  );
};

export default App;
