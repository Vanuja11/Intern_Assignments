/*(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
All Rights Reserved.

These materials are unpublished, proprietary, confidential source code of
hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
of hSenid Software International (Pvt) Limited.

hSenid Software International (Pvt) Limited retains all title to and intellectual
property rights in these materials.*/

package com.mongodb.backend.hellobackendworld.controller

import com.mongodb.backend.hellobackendworld.datasource.Repo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/restaurants")
class RestaurantController(@Autowired val repo: Repo) {

    @GetMapping
    fun getCount(): Int {
        return repo.findAll().count()
    }
}
