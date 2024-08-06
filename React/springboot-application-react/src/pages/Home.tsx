import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="btn-container">
        <Link to={"/getAllEmployees"}>
          <button className="btn">Get all employees</button>
        </Link>

        <Link to={"/getAllEmployeeById"}>
        <button className="btn">Get employee by ID</button>
        </Link>
        <button className="btn">Get employee by email</button>
      </div>
    </div>
  );
};

export default Home;
