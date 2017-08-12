package rashjz.info.app.springboot.configuration;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import rashjz.info.app.springboot.SpringBootLifelogApp;

/**
 * Created by rasha_000 on 8/12/2017.
 */
public class ServletInitializer extends SpringBootServletInitializer{
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(SpringBootLifelogApp.class);
    }
}
