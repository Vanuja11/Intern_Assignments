import axios from "axios";
import React, { useEffect, useState } from "react";
import "./GetAllEmployees.css";

const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // Set loading to true when the request starts
        const response = await axios.get("http://localhost:8081/api/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when the request completes
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="heading">Get All Employees</div>

      <div className="allEmployeesContainer">
        {loading ? (
          <div className="loading">Loading...</div> // Loading message or spinner
        ) : (
          employees.map((employee: any) => (
            <div key={employee.id} className="singleAllEmployee">
              <p className="details">
                id: {employee.employeeId}<br />
                First Name: {employee.employee_first_name}<br />
                Email: {employee.email}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GetAllEmployees;
