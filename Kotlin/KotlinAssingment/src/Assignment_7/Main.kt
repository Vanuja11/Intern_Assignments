//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_7

enum class Color(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF),
    YELLOW(0xFFFF00),
    BLACK(0x000000),
    WHITE(0xFFFFFF);
}

sealed class Result {
    data class Success(val message: String) : Result()
    data class Error(val message: String) : Result()
}

fun main() {
    val color: Color = Color.RED
    println("Color: ${color.name}")

    println()
    val successResult: Result = Result.Success("Success")
    val errorResult: Result = Result.Error("Error")

    fun printResult(result: Result) {
        when(result) {
            is Result.Success -> println(successResult)
            is Result.Error -> println(errorResult)
        }
    }

    printResult(successResult)
    printResult(errorResult)
}