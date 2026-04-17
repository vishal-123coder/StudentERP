package com.vishal.studentapi.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vishal.studentapi.entity.Student;
import com.vishal.studentapi.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    @SuppressWarnings("empty-statement")
    public Student generateStudent() {

    Student student = new Student();

    // Random Name
    student.setName("Student_" + (int)(Math.random() * 1000));

    // Random City
    String[] cities = {
    "Delhi", "Mumbai", "Bangalore", "Hyderabad",
    "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Lucknow", "Chandigarh", "Indore",
    "Bhopal", "Surat", "Nagpur", "Patna",
    "Noida", "Gurgaon", "Kanpur", "Agra"
};


    student.setCity(cities[(int)(Math.random() * cities.length)]);

    // Unique Email (IMPORTANT)
    student.setEmail(UUID.randomUUID().toString().substring(0,5) + "@gmail.com");

    return repo.save(student);
}
}