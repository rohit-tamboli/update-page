import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Products from "./Components/Products";
import productsData from "./Components/data";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/products" element={<Products products={productsData} />} />
      </Routes>
    </>
  );
}

export default App;
