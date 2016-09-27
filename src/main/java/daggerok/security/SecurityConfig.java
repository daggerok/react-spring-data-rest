package daggerok.security;

import daggerok.security.userdetails.AdminUserDetailsService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    AdminUserDetailsService adminUserDetailsService;

    public static final String[] FALLBACK_MAPPINGS = {
            "/admin**",
            "/not-found**"
    };

    @Override
    @SneakyThrows
    protected void configure(final HttpSecurity http) {
        // @formatter:off
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/", "/app.*", "/vendor/**").permitAll()
                .antMatchers(FALLBACK_MAPPINGS).permitAll()
                .antMatchers("/admin**").hasAuthority("SUPERADMIN")
                .anyRequest().fullyAuthenticated()
                .and()
            .formLogin().permitAll()
                .and()
            .logout().permitAll();
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
                .roles("USER", "ADMIN")
                .authorities(AuthorityUtils.createAuthorityList("USER", "ADMIN"))
                .and()
            .and()
            // mongo db:
            .userDetailsService(userDetailsServiceBean())
                .passwordEncoder(new BCryptPasswordEncoder());
        // @formatter:on
    }
}
