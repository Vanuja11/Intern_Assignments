//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.

fun checkAge(age: Int) {
    if (age > 18) {
        println("You are an adult")
    } else {
        println("You are a minor")
    }
}

fun main() {
    println("Hello, World!")

    var age: Int = 21
    checkAge(age)
}