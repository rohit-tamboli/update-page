import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Products from "./Components/Products";
import productsData from "./Components/data";
import PaymentSuccess from "./Components/PaymentSuccess";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/products" element={<Products products={productsData} />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        
      </Routes>
    </>
  );
}

export default App;
