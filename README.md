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

- 🎨 **Frontend:** React.js, Tailwind CSS  
- 💻 **Backend:** Spring Boot, Java, JPA, REST API  
- 🗃️ **Database:** MySQL (Amazon RDS)  
- ☁️ **Cloud:** Amazon EC2, Amazon RDS  

---

## 🛠️ Features

- ✍️ Input your text and get instant:
  - ✅ Word Count
  - ✅ Character Count
  - ✅ Space Count
- 🎯 Real-time updates as you type
- 📦 Responsive UI using React and Tailwind CSS
- 🔐 Secure backend with Spring Boot REST API
- 💾 Data stored in AWS-hosted MySQL DB

---

## 📌 How I Hosted It on AWS

### 1. Frontend Deployment (React):

- Built the project:

```bash
npm run build
````

* Installed the `serve` package:

```bash
npm install -g serve
```

* Hosted the frontend on port 80:

```bash
nohup serve -s build -l 80 &
```

### 2. Backend Deployment (Spring Boot):

* Packaged the Spring Boot application:

```bash
mvn clean package
```

* Connected to the EC2 instance:

```bash
ssh -i "key.pem" ubuntu@<EC2-IP>
```

* Transferred the `.jar` file:

```bash
scp -i "key.pem" target/backend.jar ubuntu@<EC2-IP>:~
```

* Ran the backend:

```bash
nohup java -jar backend.jar &
```

### 3. Database Setup (RDS):

* Created MySQL database in Amazon RDS
* Configured RDS security group to allow access from EC2
* Updated backend `application.properties` with RDS credentials

### 4. Security Groups:

* Allowed ports:

  * HTTP: 80
  * SSH: 22
  * MySQL: 3306

---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wordwise-app.git
cd wordwise-app
```

### 2. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Run Backend

```bash
cd backend
mvn clean install
java -jar target/backend.jar
```

> Make sure you update the backend `application.properties` file to point to your local or cloud MySQL DB.

---

## 📞 Contact

📧 **Email:** [gowtham26.work@gmail.com](mailto:gowtham26.work@gmail.com)
🔗 **LinkedIn:** [Gowtham](https://www.linkedin.com/in/gowtham4026/)

---

## 💬 Final Note

Thank you for checking out **WordWise**!
This is more than just a project — it’s a milestone in my full-stack development journey.

```
