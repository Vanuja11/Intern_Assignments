package com.hSenid.vanuja.springBootDemo.SpringLearning.datasource

import com.hSenid.vanuja.springBootDemo.SpringLearning.model.Bank

interface BankDataSource {

    fun getBanks(): Collection<Bank>
}
