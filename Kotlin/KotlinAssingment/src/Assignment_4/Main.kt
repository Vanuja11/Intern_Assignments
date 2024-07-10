//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_4

fun main() {
    val person1 = Person("John", 10)
    val student1 = Student("Vanuja", 21, "Ananda")

    println("${person1.name} is ${person1.age} years old.")
    println("${student1.name} is ${student1.age} years old and learns at " +
            "${student1.property} college.")
}