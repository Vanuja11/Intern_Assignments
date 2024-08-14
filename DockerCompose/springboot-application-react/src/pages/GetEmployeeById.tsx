/* import React, { useState } from "react";
import "./GetEmployeeById.css";
import axios from "axios";

interface Employee {
  id: string;
  employeeId: string;
  employee_first_name: string;
}

const GetEmployeeById = () => {
  const [employee, setEmployee] = useState([]);
  const [id, setId] = useState("");

  const getEmployee = (event: React.FormEvent) => {
    // prevents from reloading
    event.preventDefault();
    axios
      .get(`http://localhost:8081/api/employees/employeeId/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handlingChange");
    const { name, value } = e.target;
    setId(value);
  };

  return (
    <>
      <div className="heading">Get Employee By Id</div>
      <div className="input-field-container">
        <form className="employee-id-form" onSubmit={getEmployee}>
          <input
            type="text"
            name="id"
            className="input-field"
            placeholder="Enter id"
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <div className="allEmployeesContainer">
          {employee
            ? employee.map((employees: any) => (
                <div key={employees.id} className="singleAllEmployee">
                  <p>
                    id: {employees.employeeId}.<br />
                    First Name: {employees.employee_first_name}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default GetEmployeeById;
 */

import React, { useState } from "react";
import "./GetEmployeeById.css";
import axios from "axios";

interface Employee {
  employeeId: string;
  employee_first_name: string;
  employee_last_name: string;
  employee_gender: string;
  designation: string;
}

const GetEmployeeById: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const getEmployee = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setEmployee(null);
      setMessage("");
      const response = await axios.get(
        `http://localhost:8081/api/employees/employeeId/${id}`
      );
      console.log(response.data);
      setEmployee(response.data);
      setMessage(`Employee found`);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage(`Error occured`);
      // if (error.response && error.response.data) {
      //   alert(error.response.data);
      // }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <>
      <div className="heading">Get Employee By Id</div>
      <div className="input-field-container">
        <form className="employee-id-form" onSubmit={getEmployee}>
          <input
            type="text"
            name="id"
            className="input-field"
            placeholder="Enter id"
            onChange={handleChange}
            value={id}
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

export default GetEmployeeById;
