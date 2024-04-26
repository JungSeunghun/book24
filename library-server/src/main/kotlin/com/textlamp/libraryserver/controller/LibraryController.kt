package com.textlamp.libraryserver.controller

import com.textlamp.libraryserver.service.LibraryService
import kotlinx.coroutines.reactor.awaitSingle
import kotlinx.coroutines.reactor.mono
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/library")
class LibraryController(
    private val libraryService: LibraryService
) {
    @GetMapping("/recent")
    suspend fun recent(
        @RequestParam(required = false) pageSize: Int?
    ): String = mono {
        libraryService.getRecentBooks(pageSize)
    }.awaitSingle()

    @GetMapping("/trending")
    suspend fun trending(): String = mono {
        libraryService.getTrendingBooks()
    }.awaitSingle()

    @GetMapping("/detail")
    suspend fun detail(
        @RequestParam isbn13: String
    ) : String = mono {
        libraryService.getBookDetail(isbn13)
    }.awaitSingle()

}

