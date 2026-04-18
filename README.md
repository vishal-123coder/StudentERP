# 🎓 StudentERP - Student Management System

A full-stack Spring Boot-based Student Management System with authentication, OAuth login, and CRUD features for managing student data efficiently.

---

## 🚀 Features

- 👤 User authentication and authorization (Spring Security)
- 🔐 Login with Google OAuth2
- 🔐 Login with GitHub OAuth2
- ➕ Add new student records
- 📋 View all students
- 🔍 Search student details
- ✏️ Update student information
- ❌ Delete student records
- 🗄️ MySQL database integration
- 🔄 JPA/Hibernate for ORM
- 📊 RESTful APIs
- ⚙️ Spring Boot backend architecture

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- MySQL Database
- OAuth2 (Google & GitHub Login)
- Maven

---

## 📂 Project Structure
studentapi/
├── controller/
├── service/
├── repository/
├── model/
├── config/
├── resources/
│ ├── application.properties

1.Configure Database

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

2.Configure OAuth (Optional)
Add your Google/GitHub credentials:

spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET

Author
GitHub: vishal-123coder
 
