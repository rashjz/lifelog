package rashjz.info.app.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rashjz.info.app.springboot.model.Content;
import rashjz.info.app.springboot.repository.ContentRepository;
import rashjz.info.app.springboot.repository.ContentTypeRepository;

import java.util.List;

@Service("contentService")
public class ContentServiceImpl implements ContentService {

    @Autowired
    private ContentRepository contentRepository;

    @Autowired
    private ContentTypeRepository contentTypeRepository;


    @Override
    public void saveContent(Content content) {

    }

    @Override
    public Content findById(Long id) {
        return contentRepository.findOne(id.intValue());
    }

    @Override
    public Content findByTitle(String title) {
        return contentRepository.findByTitle(title);
    }

    @Override
    public void updateContent(Content content) {
        contentRepository.save(content);
    }

    @Override
    public void deleteContentById(Long id) {
        contentRepository.delete(id.intValue());
    }

    @Override
    public List<Content> findAllContents() {
        return contentRepository.findAll();
    }


}
