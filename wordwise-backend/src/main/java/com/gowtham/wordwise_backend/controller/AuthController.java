package com.gowtham.wordwise_backend.controller;

import com.gowtham.wordwise_backend.dto.LoginDTO;
import com.gowtham.wordwise_backend.dto.UserDTO;
import com.gowtham.wordwise_backend.entity.User;
import com.gowtham.wordwise_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://65.0.106.151"}, allowCredentials = "true")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        if (userService.emailExists(userDTO.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already exists!"));
        }

        User user = userService.register(userDTO);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!", "id", user.getId()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        try {
            User user = userService.login(loginDTO);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }
}
