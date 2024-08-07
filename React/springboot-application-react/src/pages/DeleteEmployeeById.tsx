import axios from "axios";
import React, { useState } from "react";
// import "./DeleteEmployeeById.css";

const DeleteEmployeeById = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8081/api/employees/${id}`
      );
      setMessage(`Successfully deleted employee with ID: ${id}`);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <>
      <div className="heading">Delete Employee By ID</div>
      <div className="input-field-container">
        <form className="employee-id-form" onSubmit={handleDelete}>
          <input
            type="text"
            name="id"
            className="input-field"
            placeholder="Enter ID"
            value={id}
            onChange={handleChange}
          />
          <button type="submit" className="dlt-btn">
            Delete
          </button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </>
  );
};

export default DeleteEmployeeById;
