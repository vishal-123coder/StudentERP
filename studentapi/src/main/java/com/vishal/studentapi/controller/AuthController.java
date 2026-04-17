package com.vishal.studentapi.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vishal.studentapi.entity.User;
import com.vishal.studentapi.repository.UserRepository;

@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/loginSuccess")
    public String loginSuccess(Authentication authentication){

    OAuth2User user = (OAuth2User) authentication.getPrincipal();

    String email = user.getAttribute("email");

    Optional<User> existing = userRepo.findByEmail(email);

    if(existing.isEmpty()){

    User newUser = new User();
    newUser.setEmail(email);
    newUser.setProvider("oauth");

    userRepo.save(newUser);

    }

    return "Login Successful!";

   }
   
}