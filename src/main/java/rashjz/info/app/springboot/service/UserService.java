package rashjz.info.app.springboot.service;

import rashjz.info.app.springboot.model.User;

import java.util.List;

public interface UserService {
    public User findUserByEmail(String email);

    public void saveUser(User user);

    User findById(Long id);

    User findByName(String name);

    void updateUser(User user);

    void deleteUserById(Long id);

    void deleteAllUsers();

    List<User> findAllUsers();

    boolean isUserExist(User user);
}
