import React from "react";

const GetEmployeeByEmail = () => {
  return (
    <>
      <div className="heading">Get Employee By Email</div>
      <div className="input-field-container">
        <form className="employee-id-form">
          <input
            type="text"
            className="input-field"
            placeholder="Enter email"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default GetEmployeeByEmail;
