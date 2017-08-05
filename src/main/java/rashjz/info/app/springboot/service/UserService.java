package rashjz.info.app.springboot.service;

import rashjz.info.app.springboot.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}
