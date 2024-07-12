//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_10

fun main() {

    /** Scope Function: 'apply'
     * Property 1: Refer to context object by using 'this'
     * Property 2: The return value is the 'context object'
     */

    val person = Person().apply {
        name = "Vanuja Uvaneka"
        age = 21
    }

    person.also {
        it.name = "Vanux"
        println("New name: ${it.name}")
    }

    /** Scope Function: 'with'
     *  Property 1: Refer to context object by using 'this'
     *  Property 2: The return value is the 'lambda result' */

    //therefore, don't have to use "this" keyword

    val ageAfterFiveYears: Int = with(person) {
        println(name)
        println(age)
        age!! + 5 //this will assgined to the val(ageAfterFiverYears)
    }

    println("Age after five years is $ageAfterFiveYears")

    /** Scope Function: 'also'              'ALSO PERFORM THE FOLLOWING EXTRA OPERATION'
     * Property 1 : Refer to context object by using 'it'
     * Property 2: The return value is the 'context object'
     */

    val numberList: MutableList<Int> = mutableListOf(1, 2, 3)

    val duplicateNumbers = numberList.also {
        println("The list elements are: $it")
        it.add(4)
        println("The list elements after adding an element: $it")
        it.remove(2)
        println("The list elemnts after removing an element: $it")
    }

    /** Scope Function: 'Let'
     * Property 1: Refer to context object by using 'it'
     * Property 2: The return value is the 'lambda result'
     */
    //Use 'let' function to avoid NullPointerException

    // Safe call operator means, execute the block of code only if the object is not null  (?.)

    val fullName: String? = "AAAAAAAAAAAAaaaaaaaa"

    val stringLength = fullName?.let {
        println(it!!.reversed())
        println(it.capitalize())
        (it.length)
    }

    println("String length: $stringLength")

    /** Scope Function: 'run'
     * Property 1: Refer to context object by using 'this'
     * Property 2: The return value is the 'lambda result'
     */
    // 'run' is combination of 'with' and 'let
    // If you want to operate on a Nullable object and avoid NullPointerException then use 'run'

    val bio = person?.run {
        println(name)
        println(age)
        age!! + 5
        "runnnnnnnnnnnnnnnnnnnnn"

    }

    println(bio)
}