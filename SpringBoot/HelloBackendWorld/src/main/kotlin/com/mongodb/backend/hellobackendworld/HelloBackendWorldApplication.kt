package com.mongodb.backend.hellobackendworld

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
@RestController
class HelloBackendWorldApplication {

	@GetMapping("/hello")
	fun hello(): String {
		return "KOTLIN SPRINGBOOT GRADLE MONGODB!"
	}

}

fun main(args: Array<String>) {
	runApplication<HelloBackendWorldApplication>(*args)
}
