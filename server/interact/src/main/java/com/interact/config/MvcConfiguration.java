package com.interact.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.opentok.OpenTok;

@Configuration
@ComponentScan(basePackages="com.interact")
@EnableWebMvc
public class MvcConfiguration extends WebMvcConfigurerAdapter{

	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}

	@Bean
	public OpenTok geOpenTok() {
		int apiKey = 1122334455; // YOUR API KEY
		String apiSecret = "1234abracadabra1234";
		return new OpenTok(apiKey, apiSecret);
	}
	
}
