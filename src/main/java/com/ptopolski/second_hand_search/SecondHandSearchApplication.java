package com.ptopolski.second_hand_search;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class SecondHandSearchApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecondHandSearchApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/shops/all").allowedOrigins("http://localhost:63342");
            }
        };
    }
}
