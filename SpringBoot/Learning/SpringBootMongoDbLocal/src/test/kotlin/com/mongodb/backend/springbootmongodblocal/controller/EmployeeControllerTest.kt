/*(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
All Rights Reserved.

These materials are unpublished, proprietary, confidential source code of
hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
of hSenid Software International (Pvt) Limited.

hSenid Software International (Pvt) Limited retains all title to and intellectual
property rights in these materials.*/

package com.mongodb.backend.springbootmongodblocal.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.mongodb.backend.springbootmongodblocal.model.Employee
import com.mongodb.backend.springbootmongodblocal.model.EmployeeAddress
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.*

@SpringBootTest
@AutoConfigureMockMvc
internal class EmployeeControllerTest @Autowired constructor(
    val mockMvc: MockMvc,
    val objectMapper: ObjectMapper
) {

    val baseURL = "/api/employees"

/*----------GET tests----------*/
    @Nested
    @DisplayName("GET /api/employees")
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    inner class GetEmployees {

        @Test
        fun `should return all employees`() {
            // when/then
            mockMvc.get(baseURL)
                .andDo { print() }
                .andExpect {
                    status { isOk() }
                    content { contentType(MediaType.APPLICATION_JSON) }
                    jsonPath("$[0].id") { value("5e4d604991b6134a75045ecd")}
                }
        }

    }

    @Nested
    @DisplayName("GET /api/employees/{id}")
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    inner class GetEmployee {

        @Test
        fun `should return employee with the given id`() {
            // given
            val id = "5e4d604991b6134a75045ecd"

            // when
            mockMvc.get("$baseURL/$id")
                .andDo { print() }
                .andExpect { status { isOk() } }
                .andExpect { content { contentType(MediaType.APPLICATION_JSON) } }

            // then
        }

        @Test
        fun `should return NOT FOUND if the id does not exist` () {
            // given
            val id = "does_not_exist"

            // when/then
            mockMvc.get("$baseURL/$id")
                .andDo { print() }
                .andExpect { status { isNotFound() } }
        }
    }

    /*----------POST tests----------*/
    @Nested
    @DisplayName("POST /api/employees")
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    inner class PostNewEmployee {

        /*make sure there is no employee under this id */
        @Test
        fun `should add new employee`() {
            // given
            val newEmployee = Employee(
                id = "newEmployeeTesting",
                employeeId = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "Deputy General Manager",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            val performPost = mockMvc.post(baseURL) {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(newEmployee)
            }

            // then
            performPost
                .andDo { print() }
                .andExpect {
                    status { isCreated() }
                    content {
                        contentType(MediaType.APPLICATION_JSON)
                        json(objectMapper.writeValueAsString(newEmployee))
                    }

                }

            mockMvc.get("$baseURL/${newEmployee.id}")
                .andExpect {
                    content { json(objectMapper.writeValueAsString(newEmployee)) }
                }

            // Clean up
            mockMvc.delete("$baseURL/${newEmployee.id}")
                .andDo { print() }
                .andExpect { status { isOk() } }
        }

        @Test
        fun `should return BAD REQUEST if employee with id number already exists`() {
            // given
            val invalidEmployee = Employee(
                id = "5e4d604991b6134a75045ecd",
                employeeId = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "Deputy General Manager",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            val performPost = mockMvc.post(baseURL) {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(invalidEmployee)
            }

            // then
            performPost
                .andDo { print() }
                .andExpect { status { isConflict() } }
        }

    }

    /*----------PUT tests----------*/
    @Nested
    @DisplayName("put /api/employees/{id}")
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    inner class PutExistingEmployee {

        @Test
        fun `should update an existing employee`() {
            // given
            val updateEmployee = Employee(
                id = "5e4d604991b6134a75045ecd",
                employeeId = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "UPDATED",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            val performPutRequest = mockMvc.put("${baseURL}/${updateEmployee.id}") {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(updateEmployee)
            }

            // then
            performPutRequest
                .andDo { print() }
                .andExpect {
                    status { isOk() }
                    content {
                        contentType(MediaType.APPLICATION_JSON)
                        json(objectMapper.writeValueAsString(updateEmployee))
                    }
                }

            mockMvc.get("$baseURL/${updateEmployee.id}")
                .andExpect {
                    content { json(objectMapper.writeValueAsString(updateEmployee)) }
                }
        }

        @Test
        fun `should return BAD REQUEST if no employee with given id number exists` () {
            // given
            val invalidEmployee = Employee(
                id = "DOES_NOT_EXIST",
                employeeId = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "UPDATED",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            val performPutRequest = mockMvc.put("${baseURL}/${invalidEmployee.id}") {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(invalidEmployee)
            }

            // then
            performPutRequest
                .andDo { print() }
                .andExpect { status { isNotFound() } }
        }
    }

    /*----------DELETE tests----------*/
    @Nested
    @DisplayName("DELETE /api/employees/{id}")
    @TestInstance(TestInstance.Lifecycle.PER_CLASS)
    inner class DeleteExistingEmployee {

       /* @BeforeEach
        fun setup() {
            val toBeDeletedEmployee = Employee(
                id = "TO_BE_DELETED",
                employee_id = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "Deputy General Manager",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            mockMvc.post(baseURL) {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(toBeDeletedEmployee)
            }
        }*/

        @Test
        fun `should delete the employee with the given id number`() {
            // given
            val id = "TO_BE_DELETED"

            val toBeDeletedEmployee = Employee(
                id = "TO_BE_DELETED",
                employeeId = "001001",
                employee_first_name = "Chirantha",
                employee_last_name = "Pitigala",
                employee_gender = "male",
                dob = null,
                designation = "Deputy General Manager",
                employee_address = EmployeeAddress(
                    building = "123",
                    street = "234",
                    city = "345",
                    district = "Colombo"
                ),
                email = "test@hsenidmobile.com",
                mobile_number = "+94717877672",
                coe = "Implementation",
                faction = "YAKSHA",
                sbu = listOf("SYSTEM IMPLEMENTATION"),
                joined_date = null,
                badges = emptyList()
            )

            // when
            mockMvc.post(baseURL) {
                contentType = MediaType.APPLICATION_JSON
                content = objectMapper.writeValueAsString(toBeDeletedEmployee)
            }

            mockMvc.delete("$baseURL/$id")
                .andDo { print() }
                .andExpect {
                    status { isOk() }
                }

            mockMvc.get("$baseURL/$id")
                .andExpect { status { isNotFound() } }
        }

        @Test
        fun `should return NOT FOUND if no employee with given id number exists`() {
            // given
            val invalidIdNumber = "does_not_exist"

            // when
            mockMvc.delete("$baseURL/$invalidIdNumber")
                .andDo { print() }
                .andExpect { status { isNotFound() } }
        }
    }
}
