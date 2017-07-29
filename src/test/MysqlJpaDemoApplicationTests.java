import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rashjz.info.app.springboot.SpringBootLifelogApp;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringBootLifelogApp.class)
public class MysqlJpaDemoApplicationTests {

    @Autowired
    UserRepository userRepository;

    @Test
    public void testLoadGames() {
        List<User> games = (ArrayList<User>) userRepository.findAll();
        assertEquals("Did not get all ", 1, games.size());
    }

}
