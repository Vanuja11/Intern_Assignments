package com.mongodb.backend.springbootmongodblocal.repository

import com.mongodb.backend.springbootmongodblocal.model.Employee
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployeeRepo : MongoRepository<Employee, String> {

//    fun findByEmployeeFirstName(employeeFirstName: String): Employee?

//    fun findByEmployee_id(employee_id: String):Employee?

    fun findByEmail(email: String):Employee?
}