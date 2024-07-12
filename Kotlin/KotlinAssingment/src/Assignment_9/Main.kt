//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_9

fun add(a: Double, b: Double): Double {
    return a + b
}

fun subtract(a: Double, b: Double): Double {
    return a - b
}

fun multiply(a: Double, b: Double): Double {
    return a * b
}

fun divide(a: Double, b: Double): Double {
    return a / b
}

fun higherOrderFun(a: Double, b: Double, calculate: (Double, Double) -> Double) {
    println(calculate(a, b))
}

fun main() {
    higherOrderFun(10.0, 5.0, ::add)
    higherOrderFun(10.0, 5.0, ::subtract)
    higherOrderFun(10.0, 5.0, ::multiply)
    higherOrderFun(10.0, 5.0, ::divide)

}