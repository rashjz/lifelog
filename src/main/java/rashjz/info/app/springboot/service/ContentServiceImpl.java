package rashjz.info.app.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
        contentRepository.save(content);
    }

    @Override
    public Content findById(Long id) {
        return contentRepository.findOne(id.intValue());
    }

    @Override
    public void updateContent(Content content) {
        contentRepository.save(content);
    }

    @Override
    public void deleteContentById(Long id) {
        contentRepository.delete(id.intValue());
    }

    @Transactional(readOnly = true)
    @Override
    public Page<Content> findByTitleLike(String searchTerm, Pageable pageRequest) {
        Page<Content> searchResultPage = contentRepository.findByTitleLike(searchTerm, pageRequest);
        return searchResultPage;
    }

}
