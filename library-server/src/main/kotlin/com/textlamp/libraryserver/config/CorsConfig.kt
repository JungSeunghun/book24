package com.textlamp.libraryserver.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.CorsWebFilter
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource
import org.springframework.web.util.pattern.PathPatternParser


@Configuration
class CorsConfig {
    @Bean
    fun corsFilter(): CorsWebFilter {
        val config = CorsConfiguration().apply {
            setAllowedOrigins(listOf("http://localhost:3000"))
            addAllowedMethod("*")
            addAllowedHeader("*")
            allowCredentials = true
            maxAge = 3600L
        }

        val source = UrlBasedCorsConfigurationSource(PathPatternParser())
        source.registerCorsConfiguration("/**", config)

        return CorsWebFilter(source)
    }
}