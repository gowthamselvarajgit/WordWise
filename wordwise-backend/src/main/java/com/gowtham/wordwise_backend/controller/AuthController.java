package com.gowtham.wordwise_backend.controller;

import com.gowtham.wordwise_backend.dto.UserDTO;
import com.gowtham.wordwise_backend.entity.User;
import com.gowtham.wordwise_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody UserDTO userDTO){
        if(userService.emailExists(userDTO.getEmail())){
            return "Email already exists!";
        }

        User user = userService.register(userDTO);
        return "User registered successfully with ID:" + user.getId();
    }
}
