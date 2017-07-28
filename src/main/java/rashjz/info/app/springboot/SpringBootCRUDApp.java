package rashjz.info.app.springboot;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import rashjz.info.app.springboot.configuration.JpaConfiguration;
import rashjz.info.app.springboot.model.Task;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.repositories.TaskRepository;
import rashjz.info.app.springboot.repositories.UserRepository;


@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = {"rashjz.info.app.springboot"})
// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class SpringBootCRUDApp {


    public static void main(String[] args) {

        SpringApplication.run(SpringBootCRUDApp.class, args);
    }
/*
    @Bean
    CommandLineRunner runner(UserRepository userRepository, TaskRepository taskRepository) {
        return arg -> {
            userRepository.save(new User("Mamed", 1, 12d));
            Task task = new Task();
            task.setTaskArchived(0);
            task.setTaskDescription("Elmi is ");
            task.setTaskStatus("Active");
            task.setTaskPriority("urgent");
            taskRepository.save(task);
        };
    }
*/
}
