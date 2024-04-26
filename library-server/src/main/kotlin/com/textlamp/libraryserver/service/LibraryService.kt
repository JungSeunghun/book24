package com.textlamp.libraryserver.service


import com.textlamp.libraryserver.util.JsonUtils
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.reactive.awaitFirst
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToMono
import org.springframework.web.util.UriComponentsBuilder
import java.time.LocalDate

@Service
class LibraryService(
    private val webClient: WebClient = WebClient.create()
) {
    @Value("\${library.api.key}")
    private lateinit var authKey: String

    @Value("\${library.api.baseUrl}")
    private lateinit var baseUrl: String

    suspend fun getRecentBooks(pageSize: Int?): String = coroutineScope {
        val startDate = LocalDate.now().minusDays(1).toString()
        val endDate = LocalDate.now().minusDays(1).toString()
        val pageNo = 1
        val pageSize = pageSize ?: 4
        val format = "json"

        val uri = UriComponentsBuilder
            .fromHttpUrl(baseUrl)
            .path("/loanItemSrch")
            .queryParam("authKey", authKey)
            .queryParam("startDt", startDate)
            .queryParam("endDt", endDate)
            .queryParam("pageNo", pageNo)
            .queryParam("pageSize", pageSize)
            .queryParam("format", format)
            .toUriString()

        val dataFetch = async {
            webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String::class.java)
                .awaitFirst()
        }

        dataFetch.await()
    }

    suspend fun getTrendingBooks(): String = coroutineScope {
        val searchDt = LocalDate.now().minusDays(1).toString()
        val format = "json"

        val uri = UriComponentsBuilder
            .fromHttpUrl(baseUrl)
            .path("/hotTrend")
            .queryParam("authKey", authKey)
            .queryParam("searchDt", searchDt)
            .queryParam("format", format)
            .toUriString()

        val dataFetch = async {
            webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String::class.java)
                .awaitFirst()
        }

        dataFetch.await()
    }

    suspend fun getBookDetail(isbn13: String): String = coroutineScope {
        val loaninfoYN = "Y"
        val format = "json"

        val uri = UriComponentsBuilder
            .fromHttpUrl(baseUrl)
            .path("srchDtlList")
            .queryParam("authKey", authKey)
            .queryParam("isbn13", isbn13)
            .queryParam("loaninfoYN", loaninfoYN)
            .queryParam("format", format)
            .toUriString()

        val dataFetch = async {
            webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String::class.java)
                .awaitFirst()
        }

        dataFetch.await()
    }

}