# Enterprise-Grade Academic Community Portal (HIMTIF) 🚀

![React](https://img.shields.io/badge/React-18.0-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-f511b8?logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)

A high-performance, modern web application architected for **Himpunan Mahasiswa Teknik Informatika (HIMTIF)** at Universitas Raharja. This platform serves as a comprehensive ecosystem for the organization, acting as a functional prototype for secure, role-based community portals.

> **Note**: This repository demonstrates the capability to engineer complex community platforms with secure authentication flows, role-based data isolation, and premium, highly-interactive user interfaces.

---

## 🌟 Architectural Highlights & Features

This platform is engineered with a "Cyber & Tech" aesthetic, prioritizing absolute fluidity through Glassmorphism and hardware-accelerated animations, while maintaining a robust full-stack foundation.

- **Role-Based Workflows**: Features a Tech Community and Blog system with distinct workflow states (`Draft` -> `Review` -> `Publish`), demonstrating readiness for strict Role-Based Access Control (RBAC).
- **Premium Micro-Interactions**: Custom trailing cursors, seamless page transitions, and bouncy hover effects powered by `framer-motion`, providing a Silicon Valley SaaS-tier user experience.
- **Interactive Dashboards**: Features real-time animated statistics, interactive project showcases with GitHub/Demo links, and an embedded Coding Arena IDE simulation.
- **Security-First UI Design**: The Login Portal incorporates enterprise-level visual security cues, including inline input validation, password strength logic, and mathematical captcha verification.
- **Digital Infrastructure**: Includes E-Certificate generation via QR codes, a secure Download Center, and a centralized Student Aspiration (ticketing) system.

---

## 🛠️ Technology Stack

The project utilizes a modern, decoupled Full-Stack JavaScript/TypeScript architecture designed for rapid iteration and long-term scalability.

### **Frontend Architecture**
- **Core Framework**: React 18 & TypeScript (Bootstrapped with Vite for instant HMR)
- **Styling Engine**: Tailwind CSS v4 for utility-first, responsive design
- **Animation Physics**: Framer Motion for spring animations and layout transitions
- **Routing**: React Router DOM (v6) with custom `<AnimatePresence>` wrappers

### **Backend Infrastructure** *(In Active Development)*
- **Runtime**: Node.js & Express
- **Database**: MySQL orchestrated via Prisma ORM v7.8.0
- **Security Strategy**: JWT-based stateless authentication and Row-Level Security readiness.

---

## 💻 Local Development Setup

To run this platform locally, ensure you have [Node.js](https://nodejs.org/) installed.

### 1. Initialize Frontend (Client)
Navigate to the frontend directory, install dependencies, and start the Vite development server.
```bash
cd frontend
npm install
npm run dev
```
*The frontend application will be served at `http://localhost:5173/`.*

### 2. Initialize Backend (API Gateway)
Navigate to the backend directory and start the local Node server.
```bash
cd backend
npm install
npm run dev
```
*Ensure your local MySQL instance is running on port 3307 for database connectivity.*

---

## 🛡️ About the Engineering

This application was architected as a functional blueprint for what modern, secure community platforms should look and feel like. It balances heavy, data-driven organizational needs with an extremely polished, consumer-grade user experience.

*Shaping Tomorrow's Tech Leaders.*
