import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Products from "./Components/Products";
import productsData from "./Components/data";
import PaymentSuccess from "./Components/PaymentSuccess";
import Phonepe from "./file/phonepe/Phonepe";
import Success from "./Components/Success";
import Failure from "./Components/Failure";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/products" element={<Products products={productsData} />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/phonepe" element={<Phonepe />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        
        
      </Routes>
    </>
  );
}

export default App;
