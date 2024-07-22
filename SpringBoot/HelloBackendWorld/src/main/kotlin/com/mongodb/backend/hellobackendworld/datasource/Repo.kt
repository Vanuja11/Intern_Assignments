package com.mongodb.backend.hellobackendworld.datasource

import com.mongodb.backend.hellobackendworld.model.Restaurant
import org.springframework.data.mongodb.repository.MongoRepository

interface Repo : MongoRepository<Restaurant, String> {

    fun findByRestaurantId(id: String): Restaurant?
}