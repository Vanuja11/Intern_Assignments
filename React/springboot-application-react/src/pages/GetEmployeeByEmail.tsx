import React, { useState } from "react";
import axios from "axios";

// Define the type for the employee object
interface Employee {
  id: string;
  employeeId: string;
  employee_first_name: string;
  // Add other fields as necessary
}

const GetEmployeeByEmail: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [email, setEmail] = useState("");

  const getEmployeeByEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/api/employees/email/${email}`);
      console.log(response.data);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
            className="input-field"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {employee ? (
          <div className="allEmployeesContainer">
            <div key={employee.id} className="singleAllEmployee">
              <p>
                id: {employee.employeeId}.<br />
                First Name: {employee.employee_first_name}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default GetEmployeeByEmail;
