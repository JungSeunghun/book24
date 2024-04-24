package com.textlamp.libraryserver.util

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.dataformat.xml.XmlMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper


class JsonUtils {
    companion object {
        fun xmlToJson(xmlData: String): String {
            val xmlMapper = XmlMapper()
            xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)

            val jsonMapper = jacksonObjectMapper()
            jsonMapper.configure(SerializationFeature.INDENT_OUTPUT, true)

            val tree = xmlMapper.readTree(xmlData)
            return jsonMapper.writeValueAsString(tree)
        }
    }
}