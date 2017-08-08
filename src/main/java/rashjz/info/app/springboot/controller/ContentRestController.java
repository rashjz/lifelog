package rashjz.info.app.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rashjz.info.app.springboot.model.Content;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.service.ContentService;
import rashjz.info.app.springboot.service.UserService;

import java.util.List;

/**
 * Created by Rashad Javadov on 8/7/2017.
 */
@RestController
@RequestMapping("/api")
public class ContentRestController {

    public static final Logger logger = LoggerFactory.getLogger(ContentRestController.class);

    @Autowired
    ContentService contentService;


    @GetMapping(value = "/contents")
    public @ResponseBody
    Page<Content> listAllContents(@RequestParam("searchTerm") String searchTerm,
                                  @RequestParam("page") Integer page,
                                  @RequestParam("size") Integer size) {
        //http://localhost:8080/api/contents?searchTerm=&page=0&size=10
        logger.info("searchTerm ::::: " + searchTerm + " page ::::: " + page + " size ::::: " + size);
        Pageable pageable = new PageRequest(page, size, null);
        if (String.valueOf(searchTerm).isEmpty()) {
            searchTerm = "%";
        }else {
            searchTerm=searchTerm+"%";
        }
        Page<Content> contents = contentService.findByTitleLike(searchTerm, pageable);
        logger.info(searchTerm + " getTotalElements : " + contents.getTotalElements() + " TotalPag : " + contents.getTotalPages() + "-----------------" + contents.getContent().size());
        return contents;
    }


    @GetMapping(value = "/test/")
    public @ResponseBody
    Pageable getTestMethod() {
        Pageable pageable = new PageRequest(0, 10, null);
        // new Sort(Sort.Direction.DESC, "description").and(new Sort(Sort.Direction.ASC, "title"))
        return pageable;
    }
}
