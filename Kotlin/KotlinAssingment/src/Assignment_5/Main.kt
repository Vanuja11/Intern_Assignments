//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package Assignment_5

fun main() {
    val rectangle1 = Rectangle(10.0, 20.0)
    val circle1 = Circle(100.0)

    println("width = ${rectangle1.width}" +
            "\nheight = ${rectangle1.height}" +
            "\narea of the rectangle = ${rectangle1.area()}")
    println()
    println("radius = ${circle1.radius}" +
            "\narea of the circle = ${circle1.area()}")
}