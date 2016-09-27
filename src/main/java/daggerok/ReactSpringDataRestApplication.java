package daggerok;

import daggerok.config.ReactSpringDataRestApplicationConfig;
import daggerok.data.AdminUser;
import daggerok.data.AdminUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import static java.util.Arrays.asList;

@SpringBootApplication
@Import(ReactSpringDataRestApplicationConfig.class)
public class ReactSpringDataRestApplication {

    @Bean
    CommandLineRunner dbLoader(AdminUserRepository adminUserRepository) {

        return args -> adminUserRepository.encodePasswordAndSave(new AdminUser()
                .setRoles(asList("ADMIN", "SUPERADMIN"))
                .setUsername("superadmin")
                .setPassword("admin")
                .setEnabled(true));
    }

    public static void main(String[] args) {
        SpringApplication.run(ReactSpringDataRestApplication.class, args);
    }
}
