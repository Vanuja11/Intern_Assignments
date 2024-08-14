import React, { useState } from "react";
import axios from "axios";

// Define the type for the employee object
interface Employee {
  employeeId: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_gender: string;
  designation: string;
}

const GetEmployeeByEmail: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getEmployeeByEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setEmployee(null)
setMessage("")
      const response = await axios.get(`http://localhost:8081/api/employees/email/${email}`);
      console.log(response.data);
      setEmployee(response.data);
      setMessage(`Employee found`);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage(`Error occured`)
    //   if (error.response && error.response.data) {
    //     alert(error.response.data);
    //   }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <>
      <div className="heading">Get Employee By Email</div>
      <div className="input-field-container">
        <form className="employee-id-form" onSubmit={getEmployeeByEmail}>
          <input
            type="text"
            name="email"
            className="input-field"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {message && <div className="message">{message}</div>}
        {employee ? (
          <div className="allEmployeesContainer">
            <div key={employee.employeeId} className="singleAllEmployee">
              <p>
              <span className="bold">Employee Id: </span>
                {employee.employeeId}
                <br />
                <span className="bold">First Name: </span>
                {employee.employee_first_name}
                <br />
                <span className="bold">Last Name: </span>{" "}
                {employee.employee_last_name}
                <br />
                <span className="bold">Gender: </span>
                {employee.employee_gender}
                <br />
                <span className="bold">Designation: </span>
                {employee.designation}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default GetEmployeeByEmail;
