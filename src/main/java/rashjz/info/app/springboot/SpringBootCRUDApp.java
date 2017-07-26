package rashjz.info.app.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import rashjz.info.app.springboot.configuration.JpaConfiguration;


@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = {"rashjz.info.app.springboot"})
// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class SpringBootCRUDApp {


    public static void main(String[] args) {

        SpringApplication.run(SpringBootCRUDApp.class, args);
    }

}
