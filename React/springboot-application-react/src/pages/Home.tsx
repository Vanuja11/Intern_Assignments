import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="subHeading">GET</div>
      <div className="btn-container">
        <Link to={"/getAllEmployees"}>
          <button className="btn">Get all employees</button>
        </Link>

        <Link to={"/getEmployeeById"}>
          <button className="btn">Get employee by ID</button>
        </Link>
        <Link to={"/getEmployeeByEmail"}>
          <button className="btn">Get employee by email</button>
        </Link>
      </div>


      {/* <div className="subHeading">POST</div>
      <div className="btn-container">
        <Link to={"/getAllEmployees"}>
          <button className="btn">Get all employees</button>
        </Link>

        <Link to={"/getEmployeeById"}>
          <button className="btn">Get employee by ID</button>
        </Link>
        <Link to={"/getEmployeeByEmail"}>
          <button className="btn">Get employee by email</button>
        </Link>
      </div> */}


    </div>
  );
};

export default Home;
