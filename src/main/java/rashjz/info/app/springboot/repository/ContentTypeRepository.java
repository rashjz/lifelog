package rashjz.info.app.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import rashjz.info.app.springboot.model.ContentType;

@RepositoryRestResource
public interface ContentTypeRepository extends JpaRepository<ContentType, Integer> {

}
