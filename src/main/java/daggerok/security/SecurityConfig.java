package daggerok.security;

import daggerok.security.handler.HomeUrlRedirectSuccessLoginHandler;
import daggerok.security.userdetails.AdminUserDetailsService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    AdminUserDetailsService adminUserDetailsService;

    @Autowired
    HomeUrlRedirectSuccessLoginHandler homeUrlRedirectLoginSuccessHandler;


    static final String[] PUBLIC_MAPPINGS = {
            "/",
            "/me",
            "/bye",
            "/app.*",
            "/vendor/**"
    };

    static final String[] FALLBACK_MAPPINGS = {
            "/admin",
            "/not-found"
    };

    @Override
    @SneakyThrows
    protected void configure(final HttpSecurity http) {
        // @formatter:off
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers(PUBLIC_MAPPINGS).permitAll()
                .antMatchers(FALLBACK_MAPPINGS).permitAll()
                .antMatchers("/admin**").hasAuthority("SUPERADMIN")
                //// already implemented in AdminUserRepository:
                //.antMatchers(HttpMethod.PUT, "/api/**").hasAuthority("SUPERADMIN")
                //.antMatchers(HttpMethod.POST, "/api/**").hasAuthority("SUPERADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/**").hasAuthority("SUPERADMIN")
                .anyRequest().fullyAuthenticated()
                .and()
            .formLogin()
                .successHandler(homeUrlRedirectLoginSuccessHandler)
                .permitAll()
                .and()
            .logout()
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutSuccessUrl("/bye")
                .permitAll();
        // @formatter:on
    }

    @Override
    public UserDetailsService userDetailsServiceBean() {
        return adminUserDetailsService;
    }

    @Override
    @Autowired
    @SneakyThrows
    protected void configure(AuthenticationManagerBuilder auth) {
        // @formatter:off
        auth // in memory hash map:
            .inMemoryAuthentication()
                .withUser("admin")
                .password("admin")
                .roles("USER", "SUPERADMIN", "ADMIN")
                .authorities(AuthorityUtils.createAuthorityList("USER", "SUPERADMIN", "ADMIN"))
                .and()
            .and()
            // mongo db:
            .userDetailsService(userDetailsServiceBean())
                .passwordEncoder(new BCryptPasswordEncoder());
        // @formatter:on
    }
}
