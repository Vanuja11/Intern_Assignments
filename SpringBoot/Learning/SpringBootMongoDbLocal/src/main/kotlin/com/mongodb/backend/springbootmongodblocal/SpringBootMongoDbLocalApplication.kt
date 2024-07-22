package com.mongodb.backend.springbootmongodblocal

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringBootMongoDbLocalApplication

fun main(args: Array<String>) {
	runApplication<SpringBootMongoDbLocalApplication>(*args)
}
