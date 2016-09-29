package daggerok;

import daggerok.config.ReactSpringDataRestApplicationConfig;
import daggerok.data.AdminUser;
import daggerok.data.AdminUserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import java.util.stream.Stream;

import static java.util.Arrays.asList;

@SpringBootApplication
@Import(ReactSpringDataRestApplicationConfig.class)
public class ReactSpringDataRestApplication {

    @Bean
    CommandLineRunner dbLoader(final AdminUserRepository adminUserRepository,
                               @Value("${security.user.name:superadmin}") final String superuser,
                               @Value("${security.user.password:admin}") final String password) {

        Stream.of("a", "b", "c", "d", "e", "f", "g", "h", "l", "k", "m", "n", "o", "p", "r", "s", "t", "u", "y")
                .forEach(name -> adminUserRepository.encodePasswordAndSave(new AdminUser()
                        .setRoles(asList("ADMIN"))
                        .setPassword(name)
                        .setUsername(name)
                        .setEnabled(true)));

        return args -> adminUserRepository.encodePasswordAndSave(new AdminUser()
                .setRoles(asList("ADMIN", "SUPERADMIN"))
                .setUsername(superuser)
                .setPassword(password)
                .setEnabled(true));
    }

    public static void main(String[] args) {
        SpringApplication.run(ReactSpringDataRestApplication.class, args);
    }
}
