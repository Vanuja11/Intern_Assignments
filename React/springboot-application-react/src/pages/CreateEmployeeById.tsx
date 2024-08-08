import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './CreateEmployeeById.css'

interface FormData {
  firstName: string;
  surName: string;
  position: string;
  departmentId: number;
}


const CreateEmployeeById = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    surName: "",
    position: "",
    departmentId: 0,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8080/api/employees", formData)
    .then(response => {
      // Handle the API response here if needed
      console.log('Response:', response.data);
      window.location.reload()
    })
    .catch(error => {
      // Handle errors here
      console.error('Error:',error.response.data);
      alert(error.response.data)
    })
    
  }

  return (
    <>
      <form className="createForm" onSubmit={handleSubmit}>
        {/* <label>
        Employee Id:
          <input
            type="number"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
        </label>
        <br /> */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          SurName:
          <input
            type="text"
            name="surName"
            value={formData.surName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Department Id:
          <input
            type="number"
            name="departmentId"
            value={formData.departmentId}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit <span></span></button>
      </form>
    </>
  );};

export default CreateEmployeeById;
