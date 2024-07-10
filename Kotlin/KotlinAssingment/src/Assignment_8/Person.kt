//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_8

import java.time.LocalDate

data class Person(val name: String, val age: Int) {
    fun calculateBirthYear(): Int {
        val currentYear = LocalDate.now().year
        val birthYear = currentYear - age
        return birthYear
    }
}

fun main() {
    val person1 = Person("Vanuja", 21)
    val person2 = Person("Dilion", 20)
    val person3 = Person("John", 2024)

    val people: List<Person> = listOf(person1, person2, person3)

    people.forEach { person ->
        println("${person.name}'s birthyear is ${person.calculateBirthYear()}")
    }
}
