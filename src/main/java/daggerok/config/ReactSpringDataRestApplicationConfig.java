package daggerok.config;

import daggerok.config.rest.RestRepositoryConfig;
import daggerok.security.SecurityConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({   SecurityConfig.class,
            RestRepositoryConfig.class })
public class ReactSpringDataRestApplicationConfig {}
