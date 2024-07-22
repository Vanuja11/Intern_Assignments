//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package com.hSenid.vanuja.springBootDemo.SpringLearning.service

import com.hSenid.vanuja.springBootDemo.SpringLearning.datasource.BankDataSource
import com.hSenid.vanuja.springBootDemo.SpringLearning.model.Bank
import org.springframework.stereotype.Service

@Service
class BankService(private val dataSource: BankDataSource) {

    fun getBanks(): Collection<Bank> = dataSource.retrieveBanks()

    fun getBank(accountNumber: String): Bank = dataSource.retrieveBank(accountNumber)

    fun addBank(bank: Bank):Bank = dataSource.createBank(bank)

    fun updateBank(bank: Bank): Bank = dataSource.updateBank(bank)

    fun deleteBank(accountNumber: String): Unit = dataSource.deleteBank(accountNumber)
}
