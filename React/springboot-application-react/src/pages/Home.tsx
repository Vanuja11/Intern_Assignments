import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="subHeading">GET</div>

      <div className="btn-container">
        <Link to={"/getAllEmployees"}>
          <button className="btn get-btn">Get all employees</button>
        </Link>

        <Link to={"/getEmployeeById"}>
          <button className="btn get-btn">Get employee by ID</button>
        </Link>
        <Link to={"/getEmployeeByEmail"}>
          <button className="btn get-btn">Get employee by email</button>
        </Link>
      </div>

      <div className="subHeading">CREATE</div>
      <div className="btn-container">
        <Link to={"/createEmployeeById"}>
          <button className="btn create-btn">Create employee by ID</button>
        </Link>
      </div>

      <div className="subHeading">UPDATE</div>
      <div className="btn-container">
        <Link to={"/updateEmployeeById"}>
          <button className="btn update-btn">Update employee by ID</button>
        </Link>
      </div>

      <div className="subHeading">DELETE</div>
      <div className="btn-container">
        <Link to={"/deleteEmployeeById"}>
          <button className="btn delete-btn">Delete employee by ID</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
