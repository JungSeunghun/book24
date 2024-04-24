package com.textlaamp.libraryserver.controller

import com.textlaamp.libraryserver.util.ConverterUtil
import kotlinx.coroutines.reactive.awaitFirst
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import kotlinx.coroutines.reactor.mono

@RestController
class LibraryController(
    private val webClient: WebClient = WebClient.create()
) {

    @GetMapping("/recent")
    suspend fun recent(): String = mono {
        val xmlData = webClient.get()
            .uri("http://data4library.kr/api/loanItemSrch?authKey=87cbd6deab665aa0aa1eeedf22989f704cdb80de75d703a46ce6229786e037fc&startDt=2024-04-24&endDt=2024-04-24&pageNo=1&pageSize=5")
            .retrieve()
            .bodyToMono(String::class.java)
            .awaitFirst()

        ConverterUtil.convert(xmlData)
    }.awaitSingle()

}