package rashjz.info.app.springboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by rasha_000 on 8/4/2017.
 */

@RestController
public class AuthController {

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
