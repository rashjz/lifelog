package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rashjz.info.app.springboot.model.Content;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.service.ContentService;
import rashjz.info.app.springboot.service.UserService;

import java.util.List;

/**
 * Created by rasha_000 on 8/7/2017.
 */
@RestController
@RequestMapping("/api")
public class ContentRestController {

    public static final Logger logger = LoggerFactory.getLogger(ContentRestController.class);

    @Autowired
    ContentService contentService;


    @GetMapping(value = "/contents/")
    public ResponseEntity<List<Content>> listAllContents() {
        List<Content> contents = contentService.findAllContents();
        if (contents.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Content>>(contents, HttpStatus.OK);
    }
}
