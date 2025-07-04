# Blogify
A blogging application built with MERN stack

Here’s a professional and complete README.md file you can use for your GitHub repository. It covers project description, features, tech stack, setup instructions, and deployment notes tailored to your app hosted on AWS Elastic Beanstalk.

⸻


# 📝 Full-Stack Blogging Platform

A secure and scalable full-stack blogging application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. The platform supports user authentication, blog creation with image uploads, and comment functionality — all deployed on **AWS Elastic Beanstalk**.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Login/Signup)
- 📝 **Create, Edit, and Delete Blogs**
- 📷 **Cover Image Uploads** (via Multer)
- 💬 **Comment System**
- 🧠 Middleware-based access control
- 🎯 Secure password hashing with `crypto`
- 🌐 Dynamic EJS templates with session-aware rendering
- ☁️ **Cloud Deployment** using AWS Elastic Beanstalk

---

## 🛠️ Tech Stack

| Layer          | Technology                         |
|----------------|------------------------------------|
| **Frontend**   | EJS Templates, HTML, CSS           |
| **Backend**    | Node.js, Express.js                |
| **Database**   | MongoDB (Mongoose ODM)             |
| **Authentication** | JWT, Cookies, Crypto           |
| **File Upload**| Multer                             |
| **Deployment** | AWS Elastic Beanstalk              |

---

## 📁 Folder Structure

├── routes/
│   ├── user.js
│   └── blog.js
├── model/
│   ├── user.js
│   ├── blog.js
│   └── comment.js
├── views/
│   ├── homepage.ejs
│   ├── signup.ejs
│   ├── signin.ejs
│   ├── AddBlog.ejs
│   └── blogs.ejs
├── Middleware/
│   └── authentication.js
├── public/
│   └── upload/ (image uploads)
├── .env
├── app.js

---

## ⚙️ Getting Started

### 1. Clone the Repository


git clone https://github.com/your-username/blog-platform.git
cd blog-platform

2. Install Dependencies

npm install

3. Set Environment Variables

Create a .env file in the root directory:

PORT=8000
MONGO_URL=your_mongodb_connection_string

Replace your_mongodb_connection_string with your actual MongoDB URI (local or cloud).

4. Run Locally

npm start

Visit: http://localhost:8000

⸻

☁️ Deployment (AWS Elastic Beanstalk)
	1.	Create a ZIP of the full project (excluding node_modules)
	2.	Upload via AWS Management Console > Elastic Beanstalk
	3.	Set environment variables (MONGO_URL) in the EB configuration
	4.	Deploy and monitor logs via AWS Console

⸻

🔒 Security Notes
	•	Passwords are securely hashed using crypto with salt
	•	JWT tokens are signed and verified for stateless authentication
	•	Cookies are used to manage sessions securely

⸻

📸 Screenshots
<img width="1392" alt="Screenshot 2025-07-05 at 4 34 47 AM" src="https://github.com/user-attachments/assets/ba47896a-bf2f-4d45-828a-ae66d5f95885" />
<img width="1392" alt="Screenshot 2025-07-05 at 4 35 10 AM" src="https://github.com/user-attachments/assets/8f81d88c-4357-4a8e-833f-731e553cd1ad" />

<img width="1392" alt="Screenshot 2025-07-05 at 4 34 47 AM" src="https://github.com/user-attachments/assets/32c44ac7-06db-465a-9399-ff0bdf774006" />




🙌 Author

Ashutosh Rai
💼 https://www.linkedin.com/in/ashu-roy/
📫 2022ume1830@mnit.ac.in(replace with your email)
    
