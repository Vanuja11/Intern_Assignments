import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetAllEmployees from "./pages/GetAllEmployees";
import GetEmployeeById from "./pages/GetEmployeeById";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/getAllEmployees" element={<GetAllEmployees />} />
        <Route path="/getAllEmployeeById" element={<GetEmployeeById />} />
        <Route path="/getAllEmployees" element={<GetAllEmployees />} />
      </Routes>
    </div>
  );
}

export default App;
