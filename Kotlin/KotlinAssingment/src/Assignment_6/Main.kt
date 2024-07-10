//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_6


object MathUtility {
    fun factorial(n: Int): Long {
        return if (n == 0) 1 else n * factorial(n - 1)
    }
}


fun main() {
    val book1 = object : Book("Kotlin easy", "K. John") {

    }
    println("'${book1.author}' is the author of the book '${book1.title}'")
    println()

    val num: Int = 5
    println("The factorial of $num is ${MathUtility.factorial(num)}")
}