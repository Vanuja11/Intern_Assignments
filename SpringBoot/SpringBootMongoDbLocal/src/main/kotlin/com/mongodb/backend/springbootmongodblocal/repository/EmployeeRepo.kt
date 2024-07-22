package com.mongodb.backend.springbootmongodblocal.repository

import com.mongodb.backend.springbootmongodblocal.model.Employee
import org.springframework.data.mongodb.repository.MongoRepository

interface EmployeeRepo : MongoRepository<Employee, String> {

}