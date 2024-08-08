import axios from "axios";
import React, { useEffect, useState } from "react";
import "./GetAllEmployees.css";

const GetAllEmployees = () => {
  
  interface employeeModel {
    employeeId: string;
    employee_first_name: string;
    employee_last_name: string;
    employee_gender: string;
    designation: string;
  }

  const [employees, setEmployees] = useState<[employeeModel]>([
    {
      employeeId: "",
      employee_first_name: "",
      employee_last_name: "",
      employee_gender: "",
      designation: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

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
          // employees.map((employee: any) => (
          //   <div key={employee.id} className="singleAllEmployee">
          //     <table>
          //       <thead>
          //         <tr>
          //           <th>First Name</th>
          //           <th>SurName</th>
          //           <th>Possition</th>
          //           <th>DepartmentId</th>
          //         </tr>
          //       </thead>
          //       <tbody>
          //         {employees.map((employee) => (
          //           <tr key={employee.employeeId}>
          //             <td>{employee.employee_first_name}</td>
          //             <td>{employee.employee_last_name}</td>
          //             <td>{employee.employee_gender}</td>
          //             <td>{employee.designation}</td>
          //           </tr>
          //         ))}
          //       </tbody>
          //     </table>
          //     <p className="details">
          //       id: {employee.employeeId}
          //       <br />
          //       First Name: {employee.employee_first_name}
          //       <br />
          //       Email: {employee.email}
          //     </p>
          //   </div>
          // ))

        
          <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>SurName</th>
              <th>Gender</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_first_name}>
                <td>{employee.employee_first_name}</td>
                <td>{employee.employee_last_name}</td>
                <td>{employee.employee_gender}</td>
                <td>{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


        )}
      </div>
    </>
  );
};

export default GetAllEmployees;
