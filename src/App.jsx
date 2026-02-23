import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
