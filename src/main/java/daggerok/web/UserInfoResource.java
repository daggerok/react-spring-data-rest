package daggerok.web;

import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.concurrent.TimeUnit;

@RestController
public class UserInfoResource {

    @SneakyThrows
    @GetMapping("/me")
    public Principal principal(final Principal principal) {

        TimeUnit.MILLISECONDS.sleep(300);
        return principal;
    }
}
