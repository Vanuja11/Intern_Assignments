import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetAllEmployees from "./pages/GetAllEmployees";
import GetEmployeeById from "./pages/GetEmployeeById";
import GetEmployeeByEmail from "./pages/GetEmployeeByEmail";
import DeleteEmployeeById from "./pages/DeleteEmployeeById";
import CreateEmployeeById from "./pages/CreateEmployeeById";
import UpdateEmployeeById from "./pages/UpdateEmployeeById";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/getAllEmployees" element={<GetAllEmployees />} />
        <Route path="/getEmployeeById" element={<GetEmployeeById />} />
        <Route path="/getEmployeeByEmail" element={<GetEmployeeByEmail />} />
        <Route path="/deleteEmployeeById" element={<DeleteEmployeeById />} />
        <Route path="/createEmployeeById" element={<CreateEmployeeById />} />
        <Route path="/updateEmployeeById" element={<UpdateEmployeeById />} />
      </Routes>
    </div>
  );
}

export default App;
