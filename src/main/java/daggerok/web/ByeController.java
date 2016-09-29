package daggerok.web;

import lombok.SneakyThrows;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.concurrent.TimeUnit;

@Controller
public class ByeController {

    @SneakyThrows
    @GetMapping("/bye")
    public String principal(final Principal principal) {
        return "bye";
    }
}
