package rashjz.info.app.springboot;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import rashjz.info.app.springboot.model.Content;
import rashjz.info.app.springboot.model.ContentType;
import rashjz.info.app.springboot.repository.ContentRepository;
import rashjz.info.app.springboot.repository.ContentTypeRepository;
import rashjz.info.app.springboot.repository.UserRepository;

import java.util.Date;

@SpringBootApplication
public class SpringBootLifelogApp {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootLifelogApp.class, args);
    }

    @Bean
    CommandLineRunner runner(ContentRepository contentRepository,
                             ContentTypeRepository contentTypeRepository) {
        return arg -> {
        /*	ContentType contentType =new ContentType();
            contentType.setName("Məqalə");
			contentType.setStatus("a");
			contentTypeRepository.save(contentType);
*/

        /*
            ContentType contentType = contentTypeRepository.findOne(1);
            System.out.println(contentType.getName() + "::::::::::::::::::::::::::");
            Content content = new Content();
            content.setTitle("CityLife");
            content.setDescription("CityLife is rea of 36.6 ha.\n" +
                    "\n" +
                    "The developmeni and Daniel Libeskind.");
            content.setInsertDate(new Date());

//            ContentType contentType=new ContentType();
//            contentType.setName("www");
//            contentType.setStatus("a");

            content.setContentType(contentType);
            content.setAuthor("Rashad Javadov");
            content.setStatus("a");

            contentRepository.save(content);
*/

//			userRepository.save(new User("Mamed", 1, 12d));
//			Task task = new Task();
//			task.setTaskArchived(0);
//			task.setTaskDescription("Elmi is ");
//			task.setTaskStatus("Active");
//			task.setTaskPriority("urgent");
//			taskRepository.save(task);
        };
    }
}
