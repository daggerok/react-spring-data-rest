package daggerok.web;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;

import static daggerok.security.SecurityConfig.FALLBACK_MAPPINGS;

@Slf4j
@Controller
public class FallbackHandler {

    @SneakyThrows
    @GetMapping({
            "/not-found**",
            "/admin**"
    })
    public String handle404(final HttpServletResponse res) {
        return "/index.html";
    }
}
