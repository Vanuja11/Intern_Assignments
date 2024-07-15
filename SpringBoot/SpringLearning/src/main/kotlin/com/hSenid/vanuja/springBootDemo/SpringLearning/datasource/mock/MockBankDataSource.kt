//(C) Copyright 2008-2019 hSenid Software International (Pvt) Limited.
//All Rights Reserved.
//
//These materials are unpublished, proprietary, confidential source code of
//hSenid Software International (Pvt) Limited and constitute a TRADE SECRET
//of hSenid Software International (Pvt) Limited.
//
//hSenid Software International (Pvt) Limited retains all title to and intellectual
//property rights in these materials.
package com.hSenid.vanuja.springBootDemo.SpringLearning.datasource.mock

import com.hSenid.vanuja.springBootDemo.SpringLearning.datasource.BankDataSource
import com.hSenid.vanuja.springBootDemo.SpringLearning.model.Bank
import org.springframework.stereotype.Repository

//@Repositary means this class is responsible for retriving data and storing data so and so
@Repository
class MockBankDataSource : BankDataSource {

    override fun getBanks(): Collection<Bank> {
        return emptyList()
    }
}
