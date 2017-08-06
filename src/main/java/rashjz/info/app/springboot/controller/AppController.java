package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class AppController {
    public static final Logger logger = LoggerFactory.getLogger(AppController.class);

    @GetMapping({"/","/index"})
    String home(ModelMap modelMap) {
        modelMap.addAttribute("content", "task");
        logger.info("task fragment called ::::::::::::::::::::::::");
        return "index";
    }

    @GetMapping("/user")
    String getUser(ModelMap modelMap) {
        modelMap.addAttribute("content", "user");//attributevalue is th:fragment="user"
        logger.info("user fragment called ::::::::::::::::::::::::");
        return "index";
    }


}
