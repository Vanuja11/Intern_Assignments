#!/bin/bash

#Connect to mongo shell
mongosh


#Create a database to represent hSenid Employees.
use hSenid


#Upload data in 'employee.bson' file into the created database (This is a sample collection for employees details).
mongorestore --db hSenid --collection Employees /home/vanuja/Documents/Trainee-related-docs/MongoDB/employees.bson
#  --> mongorestore --db <database> --collection <collection> <path to bson file>


#Write a query to return a single document from the 'employees' collection.
db.Employees.find({employee_id: "001011"})


#Add your details to 'employees' collection.
db.Employees.insertOne({employee_id: "123", employee_first_name: "Vanuja", employee_last_name: "Uvaneka", employee_gender: "male", dob: null, designation: "Trainee Software Engineer", employee_address: null, email: "Vanuja.uvaneka@gmail.com", mobile_number: "0123123123123", coe: "Trainee", faction: null, sbu: null, joined_date: null})


#Write a query to return all the employees with employee_id, employee name, SBUs and COE.
db.Employees.find({}, {employee_id: 1, employee_first_name: 1, employee_last_name: 1, sbu: 1, coe: 1})


#Write a query to return all the employees who belong to 'Engineering' COE, with employee_id, employee name, SBUs and COE, but exclude their '_id's.
db.Employees.find({coe: "Engineering"}, {_id: 0, employee_id: 1, employee_first_name: 1, employee_last_name: 1, sbu: 1, coe: 1})


#Write a query to find the number of employees that work under 'CORE' SBU.
db.Employees.countDocuments({sbu: "CORE"})


#Write a query to return all the employees whose 'employee_last_name' ends with 'yake', with employee_id, employee_first_name, and employee_last_name.
db.Employees.find({employee_last_name: {$regex: /yake$/i}}, {_id: 0, employee_id: 1, employee_first_name: 1, employee_last_name: 1})



