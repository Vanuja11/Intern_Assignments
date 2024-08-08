/* import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CreateEmployeeById.css";

interface FormData {
  employeeId: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_gender: string;
  designation: string;
}

const CreateEmployeeById = () => {
  const [formData, setFormData] = useState<FormData>({
    employeeId: "",
    employee_first_name: "",
    employee_last_name: "",
    employee_gender: "",
    designation: "",
  });
  const [message, setMessage] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8081/api/employees/employeeId", formData)
      .then((response) => {
        // Handle the API response here if needed
        console.log("Response:", response.data);
        window.location.reload();
        setMessage(
          `Successfully created employee with ID:     ${formData.employeeId}`
        );
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error.response.data);
        alert(error.response.data);
        setMessage(
          `Failed to create employee with ID:     ${formData.employeeId}`
        );
      });
  }

  return (
    <>
      <div className="createFormContainer">
        <form className="createForm" onSubmit={handleSubmit}>
          <label className="formLabel">
            Employee Id:
            <input
              type="number"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              className="formInput"
            />
          </label>
          <br />
          <label className="formLabel">
            First Name:
            <input
              type="text"
              name="employee_first_name"
              value={formData.employee_first_name}
              onChange={handleInputChange}
              className="formInput"
            />
          </label>
          <br />
          <label className="formLabel">
            Last Name:
            <input
              type="text"
              name="employee_last_name"
              value={formData.employee_last_name}
              onChange={handleInputChange}
              className="formInput"
            />
          </label>
          <br />
          <label className="formLabel">
            Gender:
            <input
              type="text"
              name="employee_gender"
              value={formData.employee_gender}
              onChange={handleInputChange}
              className="formInput"
            />
          </label>
          <br />
          <label className="formLabel">
            Designation:
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="formInput"
            />
          </label>
          <br />
          <button type="submit" className="formButton">
            Submit
          </button>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </>
  );
};

export default CreateEmployeeById;
 */

import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import "./CreateEmployeeById.css";

interface FormData {
  employeeId: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_gender: string;
  designation: string;
}

const CreateEmployeeById = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8081/api/employees/employeeId", data)
      .then((response) => {
        console.log("Response:", response.data);
        setMessage(`Successfully created employee with ID: ${data.employeeId}`);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        alert(error.response.data);
        setMessage(`Failed to create employee with ID: ${data.employeeId}`);
      });
  };

  return (
    <div className="createFormContainer">
      <div className="heading">Create Employee By ID</div>
      <form className="createForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="formLabel">
          Employee Id:
          <input
            type="text"
            {...register("employeeId", { required: true })}
            className="formInput"
          />
          {errors.employeeId && <span>This field is required</span>}
        </label>
        <br />
        <label className="formLabel">
          First Name:
          <input
            type="text"
            {...register("employee_first_name", { required: true })}
            className="formInput"
          />
          {errors.employee_first_name && <span>This field is required</span>}
        </label>
        <br />
        <label className="formLabel">
          Last Name:
          <input
            type="text"
            {...register("employee_last_name", { required: true })}
            className="formInput"
          />
          {errors.employee_last_name && <span>This field is required</span>}
        </label>
        <br />
        <label className="formLabel">
          Gender:
          <input
            type="text"
            {...register("employee_gender", { required: true })}
            className="formInput"
          />
          {errors.employee_gender && <span>This field is required</span>}
        </label>
        <br />
        <label className="formLabel">
          Designation:
          <input
            type="text"
            {...register("designation", { required: true })}
            className="formInput"
          />
          {errors.designation && <span>This field is required</span>}
        </label>
        <br />
        <button type="submit" className="formButton">
          Submit
        </button>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default CreateEmployeeById;
