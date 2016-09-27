package daggerok.security.entrypoint;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class AppAuthEntryPoint implements AuthenticationEntryPoint {

    @Override
    @SneakyThrows
    public void commence(final HttpServletRequest req, final HttpServletResponse res, final AuthenticationException e) {

        if (log.isDebugEnabled()) {
            log.debug("oops, %d on %s: %s", res.getStatus(), req.getRequestURL(), e);
        }

        res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
    }
}
