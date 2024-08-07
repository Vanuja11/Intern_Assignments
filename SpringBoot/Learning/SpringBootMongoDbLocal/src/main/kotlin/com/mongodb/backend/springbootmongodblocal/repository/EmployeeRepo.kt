package com.mongodb.backend.springbootmongodblocal.repository

import com.mongodb.backend.springbootmongodblocal.model.Employee
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface EmployeeRepo : MongoRepository<Employee, String> {

//    fun findByEmployeeFirstName(employeeFirstName: String): Employee?

    fun findByEmployeeId(employeeId: String): Employee?
    
    fun findByDob(date: LocalDate):Employee?

    fun findByEmail(email: String):Employee

    fun deleteByEmployeeId(employeeId: String): Employee?
}