/*(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
All Rights Reserved.

These materials are unpublished, proprietary, confidential source code of
hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
of hSenid Software International (Pvt) Limited.

hSenid Software International (Pvt) Limited retains all title to and intellectual
property rights in these materials.*/

package com.mongodb.backend.springbootmongodblocal.model


import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Field

@Document(collection = "Employees")
data class Employee(
    @Id
    val id: String? = null,
    val employee_id: String?,
    @Field("employee_first_name")
    val employee_first_name: String = "FirstName",
    val employee_last_name: String = "LastName",
    val employee_gender: String = "Unknown",
    val dob: LocalDate?,
    val designation: String?,
    val employee_address: EmployeeAddress?,
    val email: String = "Unknown@gmail.com",
    val mobile_number: String = "###-#######",
    val coe: String?,
    val faction: String?,
    val sbu: List<String>?,
    val joined_date: LocalDate?,
    val badges: List<EmployeeBadge>?
)

data class EmployeeAddress(
    val building: String?,
    val street: String?,
    val city: String?,
    val district: String?
)

data class EmployeeBadge(
    val project: String?,
    val badge: String?,
    val receivedOn: LocalDate?
)
