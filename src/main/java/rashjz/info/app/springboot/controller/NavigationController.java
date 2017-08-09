package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
//@CrossOrigin(origins = "http://domain.com", maxAge = 3600)
public class NavigationController {
    public static final Logger logger = LoggerFactory.getLogger(NavigationController.class);

    @GetMapping("/task")
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
    
    @GetMapping({"/","/content"})
    String getContentPage(ModelMap modelMap) {
        modelMap.addAttribute("content", "content");
        logger.info("content fragment called ::::::::::::::::::::::::");
        return "index";
    }
    @GetMapping("/admincontent")
    String getAdminContentPage(ModelMap modelMap) {
        modelMap.addAttribute("content", "admincontent");
        logger.info("admin content fragment called ::::::::::::::::::::::::");
        return "index";
    }
}
