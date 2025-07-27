# ✨ WordWise - Word Counter Application ✨

🚀 A powerful full-stack word counter platform built with speed, simplicity, and scalability in mind.

---

## 🎥 Demo Video
👉 [Watch Demo Video](https://drive.google.com/file/d/1HpU2hOp6JaKHfusHSzeIa3-pUbgHFU_a/view?usp=sharing)  

## 🌐 Live Application
👉 [Try It Out](http://65.0.106.151/)

## 📂 GitHub Repository
👉 [Explore the Code](https://lnkd.in/gAwnUx4m)

---

## 🧱 Tech Stack

🎨 Frontend: React.js, Tailwind CSS
💻 Backend: Spring Boot, Java, JPA, REST API  
🗃️ Database: MySQL (RDS on AWS)  
☁️ Cloud: Amazon EC2, Amazon RDS  

---

## 🛠️ Features

- ✍️ Input your text and get instant:
  - ✅ Word Count
  - ✅ Character Count
  - ✅ Space Count
- 🎯 Real-time updates as you type
- 📦 Responsive UI using React and Tailwind
- 🔐 Secure backend with Spring Boot REST API
- 💾 Data stored in AWS-hosted MySQL DB

---

## 📌 How I Hosted It on AWS

1. **Frontend Deployment:**
   - Built React app using `npm run build`
   - Installed `serve` globally:  
     ```bash
     npm install -g serve
     ```
   - Ran the app using:  
     ```bash
     nohup serve -s build -l 80 &
     ```

2. **Backend Deployment:**
   - Packaged the backend with Maven:
     ```bash
     mvn clean package
     ```
   - SSH’d into the EC2 instance:
     ```bash
     ssh -i "key.pem" ubuntu@<EC2-IP>
     ```
   - Transferred JAR to instance:
     ```bash
     scp -i "key.pem" target/backend.jar ubuntu@<EC2-IP>:~
     ```
   - Ran the JAR:
     ```bash
     nohup java -jar backend.jar &
     ```

3. **Database Configuration:**
   - Created a MySQL instance on Amazon RDS
   - Configured security group to allow EC2 access
   - Connected Spring Boot to RDS by updating `application.properties`

4. **Security Groups:**
   - Allowed HTTP (80), SSH (22), and custom TCP for MySQL (3306)

---

## 🙌 Contribution

- ✅ Application fully developed and deployed by **Gowtham**
- 🧪 Testing done by **Mahima Pranavi** — special thanks for her efforts!

---

## 📞 Contact

📧 Email: gowtham26.work@gmail.com  
🔗 LinkedIn: ([https://linkedin.com/in/gowtham](https://www.linkedin.com/in/gowtham4026/))

---

## 💬 Final Note

Thank you for checking out **WordWise**! This is more than just a project — it’s a step forward in my full-stack development journey.

