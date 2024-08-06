import axios from "axios";
import React, { useEffect, useState } from "react";
import "./GetAllEmployees.css";

// const apiClient = axios.create({
//     baseURL: 'http://localhost:8081/api/employees', // Adjust the base URL if needed
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log(employees);
  }, [employees]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8081/api/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="heading">Get All Employees</div>

      <div className="table">
        {employees
          ? employees.map((employees: any) => (
              <div key={employees.id}>
                <p>
                  id: {employees.employeeId}.<br />
                  First Name: {employees.employee_first_name}
                </p>
                {/* <p>{crypto}</p> */}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default GetAllEmployees;
