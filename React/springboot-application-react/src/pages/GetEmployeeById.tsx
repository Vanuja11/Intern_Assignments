import React from "react";
import "./GetEmployeeById.css";

const GetEmployeeById = () => {
  return (
    <>
      <div className="heading">Get Employee By Id</div>
      <div className="input-field-container">
        <form className="employee-id-form">
          <input type="text" className="input-field" placeholder="Enter id" />
          <button type="submit" className="hover-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default GetEmployeeById;
