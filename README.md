# 🧠 WordWise — Intelligent Word Counter App

Welcome to **WordWise** — a full-stack intelligent word and content analyzer built with a beautiful UI, real-time stats, and secure user management.

---

## 🧩 Tech Stack

### 💻 Frontend
- **React.js** with **Functional Components**
- **Tailwind CSS** for beautiful, responsive UI
- **Formik + Yup** for form validation
- **React Router DOM** for routing
- **React Hot Toast** for notifications

### ⚙️ Backend
- **Spring Boot 3** (REST API)
- **MySQL** (User data storage)
- **JPA & Hibernate**
- **DTO Pattern** & **Service Layer Architecture**
- **UUID** as primary key

---

## ✨ Features

### 🖊️ Word Counter
- Live text editor with character, word, paragraph, sentence stats
- Platform-specific limits: Twitter, LinkedIn, Facebook
- Download your content as `.txt` file
- Copy or clear content instantly

### 📈 Real-Time Analytics
- Keyword frequency sidebar
- Automatic updates as you type
- Minimalist and clean UI for enhanced focus

### 🔐 User Management
- User Registration with validations
- Login architecture in progress
- Session-ready structure

---

## 🛠️ Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev

### Backend

cd backend
# Use your IDE or terminal
mvn spring-boot:run

🔐 Configuration
MySQL on localhost:3306
Database: wordwise_db
Update credentials in application.yml


