package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.service.UserService;

import javax.validation.Valid;

@Controller
public class LoginController {

    public static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;

    @GetMapping(value = {"/login"})
    public String login(ModelMap modelMap) {
        modelMap.addAttribute("content", "login");
        return "index";
    }

    @GetMapping("/registration")
    public String registration(ModelMap modelMap) {
        modelMap.addAttribute("user", new User());
        modelMap.addAttribute("content", "registration");
        return "index";
    }

    @PostMapping(value = "/registration")
    public String createNewUser(@Valid User user, BindingResult bindingResult, ModelMap modelMap) {
        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            bindingResult.rejectValue("email", "error.user",
                    "There is already a user registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            modelMap.addAttribute("errorMessage", "Something went wrong please try again");
        } else {
            userService.saveUser(user);
            modelMap.addAttribute("successMessage", "User has been registered successfully");
            modelMap.addAttribute("user", new User());
        }
        modelMap.addAttribute("content", "registration");
        return "index";
    }


//	@RequestMapping(value="/admin/home", method = RequestMethod.GET)
//	public ModelAndView home(){
//		ModelAndView modelAndView = new ModelAndView();
//		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//		User user = userService.findUserByEmail(auth.getName());
//		modelAndView.addObject("userName", "Welcome " + user.getName() + " " + user.getLastName() + " (" + user.getEmail() + ")");
//		modelAndView.addObject("adminMessage","Content Available Only for Users with Admin Role");
//		modelAndView.setViewName("admin/home");
//		return modelAndView;
//	}


}
