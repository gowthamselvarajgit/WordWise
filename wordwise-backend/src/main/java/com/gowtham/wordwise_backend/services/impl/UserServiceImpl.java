package com.gowtham.wordwise_backend.services.impl;

import com.gowtham.wordwise_backend.dto.LoginDTO;
import com.gowtham.wordwise_backend.dto.UserDTO;
import com.gowtham.wordwise_backend.entity.User;
import com.gowtham.wordwise_backend.repository.UserRepository;
import com.gowtham.wordwise_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    @Override
    public User register(UserDTO dto) {
        User user = User.builder()
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .email(dto.getEmail())
                .country(dto.getCountry())
                .state(dto.getState())
                .phone(dto.getPhone())
                .password(dto.getPassword())
                .build();
        return userRepository.save(user);
    }

    @Override
    public User login(LoginDTO loginDTO) {
        Optional<User> user = userRepository.findByEmail(loginDTO.getEmail());
        if(user.isPresent() && user.get().getPassword().equals(loginDTO.getPassword())) {
            return user.get();
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }
}
