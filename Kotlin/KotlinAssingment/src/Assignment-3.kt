//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.



fun main() {
    val numbers = arrayOf(5, 10, 15, 20, 25, 30, 35, 40)

    //printing the sum
    val sum = numbers.sum()
    println("Total = $sum")

    //print numbers in array
    println()
    numbers.forEach { number ->
        println(number)
    }

    //print the max value
    println()
    val maxNum = numbers.max()
    println("The maximum value: $maxNum")

    //print the min value
    println()
    val minNum = numbers.min()
    println("The minimum value: $minNum")

    //create array with even numbers
    println()
    val evenNumbers = numbers.filter { it % 2 == 0 }
    println("even numbers: ${evenNumbers.joinToString(", ")}")

    //squared array
    println()
    val squaredNumbers = numbers.map { it * it }
    println("square numbers: ${squaredNumbers.joinToString(", ")}")

    //divisible by 5
    println()
    var isDivisibleBy_5 = numbers.any { it % 5 == 0 }

    if (isDivisibleBy_5) {
        println("Yes")
    } else if (!isDivisibleBy_5) {
        println("No")
    }

    //print array in ascending order
    println()
    val ascendingOrder = numbers.sortedArray()
    println("ascending order: ${ascendingOrder.joinToString(", ")}")

    // print array in reverse order
    println()
    val reversedArray = numbers.reversedArray()
    println("reversed array: ${reversedArray.joinToString(", ")}")

    //count numbers greater than 20
    println()
    val greaterThan20Count = numbers.count { it > 20 }
    println("count of numbers greater than 20: $greaterThan20Count")
}
