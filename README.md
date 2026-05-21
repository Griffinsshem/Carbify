# 🚗 Carbify – Modern Car Rental Platform

Carbify is a modern full-stack car rental web application built with **Next.js 16**, **Firebase Authentication**, and **Tailwind CSS**.  
Users can browse available vehicles, view car details, authenticate securely, and book rides seamlessly through a clean and responsive interface.

---

## 🌐 Live Demo

🚀 Live Website: https://carbify-lemon.vercel.app/

📂 GitHub Repository: https://github.com/Griffinsshem/Carbify

---

## ✨ Features

- 🔐 Firebase Authentication (Login & Registration)
- 🚘 Browse available rental cars
- 📄 Dynamic car details pages
- 📅 Car booking system
- 📦 User-specific booking storage
- 📱 Fully responsive UI
- ⚡ Fast performance with Next.js 16
- 🎨 Modern UI with Tailwind CSS
- 🔥 Optimized image rendering using Next/Image

---

## 🖼️ Preview

### Homepage
Modern hero section with premium car showcase and smooth responsive layout.

### Cars Listing
Browse multiple vehicles with pricing, seats, speed, and fuel information.

### Booking Page
Book rides seamlessly with pickup dates, payment method, and booking summary.

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- Tailwind CSS
- Lucide React Icons

### Backend & Authentication
- Firebase Authentication
- Firebase SDK

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── about/
│   ├── booking/
│   ├── cars/
│   │   └── [id]/
│   ├── contact/
│   ├── login/
│   ├── my-bookings/
│   ├── register/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── About.jsx
│   ├── Car.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Navbar.jsx
│
└── firebase/
    └── config.js
```

## ⚙️ Installation & Setup

1. Clone the Repository

```
git clone https://github.com/Griffinsshem/Carbify.git
```

2. Navigate into the Project
```
cd Carbify
```

3. Install Dependencies
```
npm install
```

4. Create Environment Variables

Create a ```.env.local``` file in the root directory and add:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

▶️ Running the Project

Development Server

```
npm run dev
```

Open:

```
http://localhost:3000
```
Production Build

```
npm run build
npm start
```

## 🔐 Authentication

Carbify uses Firebase Authentication for secure login and registration.

Features include:

- User registration
- Login authentication
- Persistent session handling
- Protected booking workflow

## 🚀 Deployment

This project is deployed on Vercel.

- Deploy Your Own
- Push project to GitHub
- Import repository into Vercel
- Add environment variables
- Deploy

## 📈 Future Improvements
- 💳 Stripe/M-Pesa payment integration
- 🗄️ Firestore database integration
- ❤️ Favorites/Wishlist system
- 📊 Admin dashboard
- 🔍 Advanced filtering & search
- 📍 Google Maps integration
- 📧 Booking email notifications

## 👨‍💻 Developer

Built by Griffins Shem Ondeyo

- GitHub: https://github.com/Griffinsshem
- LinkedIn: https://www.linkedin.com/in/griffins-shem/
- X (Twitter): https://x.com/griffins_shem

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!


---
