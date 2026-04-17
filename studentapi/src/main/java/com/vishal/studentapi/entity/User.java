package com.vishal.studentapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@SuppressWarnings("unused")
private Long id;

private String email;

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

private String provider;

public String getProvider() {
    return provider;
}

public void setProvider(String provider) {
    this.provider = provider;
}

}