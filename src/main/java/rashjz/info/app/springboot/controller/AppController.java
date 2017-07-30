package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
	public static final Logger logger = LoggerFactory.getLogger(AppController.class);
	@RequestMapping("/")
	String home(ModelMap modelMap) {
		modelMap.addAttribute("content", "indexView");
		logger.info("main  index ");
		return "index";
	}
	@RequestMapping("/user")
	String getUser(ModelMap modelMap) {
		modelMap.addAttribute("content", "userView");
		logger.info("main  index ");
		return "index";
	}

	@RequestMapping("/partials/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		return page;
	}

}
