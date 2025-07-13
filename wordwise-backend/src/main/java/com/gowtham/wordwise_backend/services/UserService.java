package com.gowtham.wordwise_backend.services;

import com.gowtham.wordwise_backend.dto.LoginDTO;
import com.gowtham.wordwise_backend.dto.UserDTO;
import com.gowtham.wordwise_backend.entity.User;

public interface UserService {
    boolean emailExists(String email);
    User register(UserDTO dto);
    User login(LoginDTO loginDTO);
}
