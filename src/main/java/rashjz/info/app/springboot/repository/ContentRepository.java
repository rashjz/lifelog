package rashjz.info.app.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import rashjz.info.app.springboot.model.Content;

@Repository
public interface ContentRepository extends PagingAndSortingRepository<Content, Integer> {

    Page<Content> findByTitleLike(String title, Pageable pageable);
}
