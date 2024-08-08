import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import "./UpdateEmployeeById.css";

interface FormData {
  employeeId: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_gender: string;
  designation: string;
}

const UpdateEmployeeById = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    axios
      .put(
        `http://localhost:8081/api/employees/employeeId/${data.employeeId}`,
        data
      )
      .then((response) => {
        console.log("Response:", response.data);
        setMessage(`Successfully updated employee with ID: ${data.employeeId}`);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        alert(error.response.data);
        setMessage(`Failed to update employee with ID: ${data.employeeId}`);
      });
  };

  return (
    <div className="updateFormContainer">
      <div className="heading">Update Employee By ID</div>
      <form className="updateForm" onSubmit={handleSubmit(onSubmit)}>
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

export default UpdateEmployeeById;
