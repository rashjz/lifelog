package rashjz.info.app.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import rashjz.info.app.springboot.configuration.JpaConfiguration;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.repositories.UserRepository;


@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"rashjz.info.app.springboot"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class SpringBootCRUDApp {

	//@Autowired
	//public  UserRepository userRepository;

	public static void main(String[] args) {

		SpringApplication.run(SpringBootCRUDApp.class, args);
	}
/*
	public void newValueDB(){
		User user=new User();
		user.setAge(12);
		user.setName("Rashad");
		user.setSalary(566);
		user.setId(566L);
		userRepository.save(user);
	}
	*/
}
