package rashjz.info.app.springboot.service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import rashjz.info.app.springboot.model.Role;
import rashjz.info.app.springboot.model.User;
import rashjz.info.app.springboot.repository.RoleRepository;
import rashjz.info.app.springboot.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(1);
        Role userRole = roleRepository.findByRole("ADMIN");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        userRepository.save(user);
    }


    public User findById(Long id) {
        return userRepository.findOne(id);
    }

    public User findByName(String name) {
        return userRepository.findByName(name);
    }

    public void updateUser(User user) {
        saveUser(user);
    }

    public void deleteUserById(Long id) {
        userRepository.delete(id);
    }

    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public boolean isUserExist(User user) {
        return findByName(user.getName()) != null;
    }
}
