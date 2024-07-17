package com.hSenid.vanuja.springBootDemo.SpringLearning.datasource

import com.hSenid.vanuja.springBootDemo.SpringLearning.model.Bank

interface BankDataSource {

    // returns a collection of bank entities
    fun retrieveBanks(): Collection<Bank>

    fun retrieveBank(accountNumber: String): Bank

    fun createBank(bank: Bank): Bank

    fun updateBank(bank: Bank): Bank
}
