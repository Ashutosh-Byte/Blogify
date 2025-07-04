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

📸 Screenshots (Optional)

Include if needed: login, add blog, comment section, etc.

⸻

🙌 Author

Ashutosh Rai
💼 LinkedIn
📫 ashutosh@example.com (replace with your email)
    
