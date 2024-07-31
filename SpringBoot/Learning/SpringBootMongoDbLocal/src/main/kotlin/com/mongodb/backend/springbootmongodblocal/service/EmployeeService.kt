/*(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
All Rights Reserved.

These materials are unpublished, proprietary, confidential source code of
hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
of hSenid Software International (Pvt) Limited.

hSenid Software International (Pvt) Limited retains all title to and intellectual
property rights in these materials.*/

package com.mongodb.backend.springbootmongodblocal.service

import com.mongodb.backend.springbootmongodblocal.model.Employee
import com.mongodb.backend.springbootmongodblocal.repository.EmployeeRepo
import org.springframework.stereotype.Service

@Service
class EmployeeService(private val repository: EmployeeRepo) {

    fun findAll(): List<Employee> = repository.findAll()

    fun findById(id: String): Employee? = repository.findById(id).orElse(null)

//    fun findByEmployeeFirstName(employeeFirstName: String): Employee? = repository.findByEmployeeFirstName(employeeFirstName)

//    fun findById(id: String): Employee = repository.findById(id)

    fun findbyemployeeId(employeeId: String): Employee? = repository.findByEmployeeId(employeeId)

    fun findByEmail(email: String): Employee? = repository.findByEmail(email)

    fun save(employee: Employee): Employee = repository.save(employee)

    fun deleteById(id: String) = repository.deleteById(id)
}
