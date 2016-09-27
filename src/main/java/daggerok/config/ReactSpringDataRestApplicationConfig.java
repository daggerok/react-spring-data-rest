package daggerok.config;

import daggerok.ReactSpringDataRestApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = ReactSpringDataRestApplication.class)
public class ReactSpringDataRestApplicationConfig {}
