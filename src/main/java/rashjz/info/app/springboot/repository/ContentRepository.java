package rashjz.info.app.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import rashjz.info.app.springboot.model.Content;
import rashjz.info.app.springboot.model.Role;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {

    Content findByTitle(String title);

}
