package rashjz.info.app.springboot.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import rashjz.info.app.springboot.model.Task;

import java.util.List;

@RepositoryRestResource
public interface TaskRepository extends CrudRepository<Task, Integer> {
    List<Task> findByTaskArchived(@Param("archivedfalse") int taskArchivedFalse);
    List<Task> findByTaskStatus(@Param("status") String taskStatus);
}
