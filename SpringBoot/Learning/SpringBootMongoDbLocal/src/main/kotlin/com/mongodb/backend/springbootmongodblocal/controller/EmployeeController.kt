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
class EmployeeController(private val service: EmployeeService) {

    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(e: NoSuchElementException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.NOT_FOUND)

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e: IllegalArgumentException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.BAD_REQUEST)

    @GetMapping
    fun getAllEmployees(): List<Employee> = service.findAll()

//    @GetMapping("/{id}")
//    fun getEmployeeById(@PathVariable id: String): Employee? = service.findById(id)

    @GetMapping("/{id}")
    fun getEmployeeById(@PathVariable id: String): ResponseEntity<Any> {
        val employee = service.findById(id)
        return if (employee != null) {
            ResponseEntity.ok(employee)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the id '${id}'")
        }
    }


//    @GetMapping("/firstName/{employeeFirstName}")
//    fun getEmployeeByFirstName(@PathVariable employeeFirstName: String): Employee? = service.findByEmployeeFirstName(employeeFirstName)

//    @GetMapping("/findByFirstName/{firstName}")
//    fun findByFirstName(@PathVariable firstName: String): Employee? {
//        return service.findByEmployee_first_name(firstName)
//    }

//    @GetMapping("/email/{email}")
//    fun getEmployeeByEmail(@PathVariable email: String): Employee? = service.findByEmail(email)

    @GetMapping("/email/{email}")
    fun getEmployeeByEmail(@PathVariable email: String): ResponseEntity<Any> {
        val employee = service.findByEmail(email)
        return if (employee != null) {
            ResponseEntity.ok(employee)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the email of '${email}'")
        }
    }

    @PostMapping
    fun createEmployee(@RequestBody employee: Employee): Employee = service.save(employee)

//    @DeleteMapping("/{id}")
//    fun deleteEmployee(@PathVariable id: String) = service.deleteById(id)

//    @DeleteMapping("/{id}")
//    fun deleteEmployee(@PathVariable id: String): ResponseEntity<Any> {
//        return try {
//            service.deleteById(id)
//            ResponseEntity.ok("Employee with id '$id' deleted successfully.")
//        } catch (ex: NoSuchElementException) {
//            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
//                    "\nMessage: Could not find an employee with the id '${id}'")
//        }
//    }


    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: String): ResponseEntity<Any> {
        val employee = service.findById(id)
        return if (employee != null) {
            service.deleteById(id)
            ResponseEntity.ok("Employee with id '$id' deleted successfully.")
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: ${HttpStatus.NOT_FOUND.value()}" +
                    "\nMessage: Could not find an employee with the id '${id}'")
        }
    }

}
