# Personal Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) showcasing my projects and skills.

## 🌟 Live Demo

- Frontend: [View Live Site](https://portfolio-frontend-delta-eight.vercel.app)
- Backend API: [API Endpoint](https://portfolio-backend-helgxq.fly.dev)

## ✨ Features

- **Responsive Design**: Fully responsive layout ensuring perfect display across all devices
- **Dynamic Content**: Content management through MongoDB database
- **Modern UI/UX**: Clean and professional interface with smooth animations
- **Contact Form**: Integrated email functionality using Nodemailer
- **Project Showcase**: Dynamic project display with filtering capabilities
- **Skills Section**: Organized display of technical and soft skills
- **Interactive Elements**: Smooth scrolling, animations, and interactive components

## 🛠 Tech Stack

### Frontend
- React.js
- CSS3 with modern features
- Axios for API requests
- SweetAlert2 for notifications
- Font Awesome icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer for email functionality
- CORS for secure cross-origin requests
- Express Rate Limit for API protection

### Deployment
- Frontend: Vercel
- Backend: Fly.io
- Database: MongoDB Atlas

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Frontend Setup
```bash
# Clone the frontend repository
git clone https://github.com/HeshamAbdallah02/portfolio-frontend.git

# Navigate to frontend directory
cd portfolio-frontend

# Install dependencies
npm install

# Start development server
npm start


### Backend Setup

# Clone the backend repository
git clone https://github.com/HeshamAbdallah02/portfolio-backend.git

# Navigate to backend directory
cd portfolio-backend

# Install dependencies
npm install

# Create .env file and add your variables
cp .env.example .env

# Start server
npm start


📁 Project Structure
### Frontend
portfolio-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── config/
│   ├── assets/
│   └── styles/

### Backend
portfolio-backend/
├── src/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── public/
└── server.js


⚙️ Environment Variables
### Frontend
REACT_APP_API_BASE_URL=your_backend_url

### Backend
MONGODB_URI=your_mongodb_uri
PORT=5000
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
RECEIVER_EMAIL=your_receiver_email

📝 API Endpoints
GET /api/profile: Fetch profile information
GET /api/projects: Fetch all projects
GET /api/skills: Fetch skills information
POST /api/contact: Send contact form message
🔒 Security Features
CORS configuration
Rate limiting
Environment variables
Input validation
Error handling
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page.

📜 License
This project is MIT licensed.

👤 Contact
Hesham Abdallah

LinkedIn: Hesham Abdallah
GitHub: @HeshamAbdallah02