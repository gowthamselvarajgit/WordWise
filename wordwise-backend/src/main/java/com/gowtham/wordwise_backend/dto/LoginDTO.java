package com.gowtham.wordwise_backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private String email;
    private String password;
}
