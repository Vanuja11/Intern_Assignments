/*(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
All Rights Reserved.

These materials are unpublished, proprietary, confidential source code of
hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
of hSenid Software International (Pvt) Limited.

hSenid Software International (Pvt) Limited retains all title to and intellectual
property rights in these materials.*/

package com.mongodb.backend.springbootmongodblocal.controller

import com.mongodb.backend.springbootmongodblocal.model.Employee
import com.mongodb.backend.springbootmongodblocal.service.EmployeeService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/employees")
class EmployeeController(private val employeeService: EmployeeService) {

    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(e: NoSuchElementException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.NOT_FOUND)

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e: IllegalArgumentException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.BAD_REQUEST)


    @GetMapping
    fun getAllEmployees(): ResponseEntity<Any> {
        val employees = employeeService.findAll()
        return if (employees.isNotEmpty()) {
            ResponseEntity.ok(employees)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: No employees found")
        }
    }

    @GetMapping("/{id}")
    fun getEmployeeById(@PathVariable id: String): ResponseEntity<Any> {
        val employee = employeeService.findById(id)
        return if (employee != null) {
            ResponseEntity.ok(employee)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the id '${id}'")
        }
    }

    @GetMapping("/email/{email}")
    fun getEmployeeByEmail(@PathVariable email: String): ResponseEntity<Any> {
        val employee = employeeService.findByEmail(email)
        return if (employee != null) {
            ResponseEntity.ok(employee)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the email of '${email}'")
        }
    }

    @PostMapping
    fun createEmployee(@RequestBody employee: Employee): ResponseEntity<Any> {
        val existingEmployee = employeeService.findById(employee.id.toString())
        return if (existingEmployee != null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body("Error: ${HttpStatus.CONFLICT.value()}" +
                    "\nMessage: An employee with the ID '${employee.id}' already exists.")
        } else {
            val savedEmployee = employeeService.save(employee)
            ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee)
        }
    }

    @PutMapping("/{id}")
    fun updateEmployee(@PathVariable id: String, @RequestBody employee: Employee): ResponseEntity<Any> {
        if (employee == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: ${HttpStatus.BAD_REQUEST.value()}" +
                    "\nMessage: Request body is missing.")
        }

        val existingEmployee = employeeService.findById(id)
        return if (existingEmployee != null) {
            val updatedEmployee = employeeService.save(employee.copy(id = id))
            ResponseEntity.ok(updatedEmployee)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the id '${id}'")
        }
    }

    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: String): ResponseEntity<Any> {

        val employee = employeeService.findById(id)
        return if (employee != null) {
            employeeService.deleteById(id)
            ResponseEntity.ok("Employee with id '$id' deleted successfully.")
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the id '${id}'")
        }
        
    }
}
