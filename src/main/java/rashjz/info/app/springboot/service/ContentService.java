package rashjz.info.app.springboot.service;

import rashjz.info.app.springboot.model.Content;


import java.util.List;

public interface ContentService {

    public void saveContent(Content content);

    Content findById(Long id);

    Content findByTitle(String title);

    void updateContent(Content content);

    void deleteContentById(Long id);

    List<Content> findAllContents();

}
