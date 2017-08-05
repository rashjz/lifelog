package rashjz.info.app.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootLifelogApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootLifelogApp.class, args);
	}

//	@Bean
//	CommandLineRunner runner(UserRepository userRepository) {
//		return arg -> {
//			userRepository.save(new User("Mamed", 1, 12d));
//			Task task = new Task();
//			task.setTaskArchived(0);
//			task.setTaskDescription("Elmi is ");
//			task.setTaskStatus("Active");
//			task.setTaskPriority("urgent");
//			taskRepository.save(task);
//		};
//	}
}
