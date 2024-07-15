package com.hSenid.vanuja.springBootDemo.SpringLearning.datasource.mock

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class MockBankDataSourceTest {

    private val mockDataSource =  MockBankDataSource()

    @Test
    fun `should provide a collection of banks `() {

        // given


        // when
        val banks = mockDataSource.getBanks()

        //then
        Assertions.assertThat(banks).isNotEmpty
    }
}