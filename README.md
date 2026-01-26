<div align="center">

# 💼 Kriangkrai Yothi Portfolio
### Personal Portfolio Website | Full-Stack Developer & Technical Designer

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat)](#)

[View Live Site](https://bkkyothi.github.io) • [Report Issue](https://github.com/bkkyothi/bkkyothi.github.io/issues)

</div>

---

## 📖 ภาพรวมโครงการ (Overview)

**Kriangkrai Yothi Portfolio** คือเว็บไซต์แสดงผลงานส่วนตัวที่ออกแบบมาด้วย **Material Design 3** พร้อมด้วยสีสันและการออกแบบที่สวยงามตามหลักการของ Google Messages Landing Page เน้นความทันสมัย ใช้งานง่าย และรองรับทุกอุปกรณ์

เว็บไซต์นี้ถูกพัฒนาด้วย **Vite + React + TypeScript** เพื่อให้มีประสิทธิภาพสูงสุด พร้อมด้วย **Material Tailwind** components ที่ช่วยให้ UI สวยงามและใช้งานได้จริง เหมาะสำหรับการนำเสนอตัวเองในฐานะ Full-Stack Developer และ Technical Designer

---

## 🚀 ฟีเจอร์หลัก (Key Features)

### 🎨 **Modern Material Design 3**
* **Dark/Light Theme Toggle:** ปุ่ม FAB ที่มุมล่างขวาสำหรับสลับธีม พร้อม localStorage
* **Fluid Gradient Background:** พื้นหลังแอนิเมชั่นแบบ Gradient Mesh ที่เคลื่อนไหว (Purple, Pink, Red, Indigo)
* **Pantone Color Palette:** ใช้สี Blue Fusion และ Cloud Cover ที่คัดสรรมาอย่างดี
* **Glassmorphism:** เอฟเฟกต์กระจกแบบ Frosted Glass ที่ทันสมัย
* **Smooth Animations:** การเคลื่อนไหวและ Transitions แบบ Micro-interactions
* **Smooth Scrolling:** การเลื่อนหน้าแบบนุ่มนวลไปยังแต่ละ Section

### 📱 **Fully Responsive Design**
* **Mobile-First Approach:** ออกแบบให้ใช้งานบนมือถือได้อย่างลื่นไหล
* **Adaptive Layout:** ปรับตัวให้เข้ากับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
* **Touch-Friendly:** UI ที่เหมาะสำหรับการใช้งานแบบสัมผัส

### 🎯 **Interactive Portfolio Gallery**
* **Smart Filtering:** ระบบกรองโปรเจกต์แบบ Real-time (All / Applications / Web Development)
* **Dynamic Cards:** การ์ดโปรเจกต์ที่มีภาพและรายละเอียดครบถ้วน
* **Hover Effects:** เอฟเฟกต์เมื่อเลื่อนเมาส์ผ่านที่ดึงดูดสายตา

### 📧 **Contact Form Integration**
* **Clean Form Design:** ฟอร์มติดต่อที่ออกแบบอย่างเรียบง่ายแต่สวยงาม
* **Social Links:** ลิงก์ไปยัง GitHub, LinkedIn, และ Email

---

## 💻 เทคโนโลยีที่ใช้ (Tech Stack)

| Category | Technologies |
| :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Material Tailwind](https://img.shields.io/badge/Material_Tailwind-00897B?style=flat-square) |
| **Icons** | ![Heroicons](https://img.shields.io/badge/Heroicons-8B5CF6?style=flat-square&logo=heroicons&logoColor=white) |
| **Fonts** | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) (Inter) |

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
bkkyothi.github.io/
├── 📱 src/                     # โค้ดหลักของแอปพลิเคชัน
│   ├── components/            # - React Components
│   │   ├── Navbar.tsx         #   • Sticky Navigation Bar (Glassmorphism)
│   │   ├── Hero.tsx           #   • Hero Section (About)
│   │   ├── Resume.tsx         #   • Education & Experience Timeline
│   │   ├── Portfolio.tsx      #   • Filterable Project Gallery
│   │   ├── Contact.tsx        #   • Contact Form
│   │   ├── Footer.tsx         #   • Footer with Social Links
│   │   ├── Background.tsx     #   • Animated Gradient Mesh Background
│   │   └── ThemeToggle.tsx    #   • Dark/Light Mode FAB Toggle
│   ├── context/               # - React Context
│   │   └── ThemeContext.tsx   #   • Theme State Management
│   ├── App.tsx                # - Main Application Component
│   ├── main.tsx               # - React Entry Point
│   └── index.css              # - Global Styles & Animations
├── 📄 index.html               # HTML Template
├── ⚙️ vite.config.ts           # Vite Configuration
├── 🎨 tailwind.config.js       # Tailwind + Custom Colors
├── 📦 package.json             # Dependencies & Scripts
└── 📖 README.md                # Documentation (You're here!)
```

---

## 🛠️ วิธีการติดตั้ง (Installation)

### Prerequisites
- Node.js 18+ และ npm ติดตั้งในเครื่อง ([Download](https://nodejs.org/))

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/bkkyothi/bkkyothi.github.io.git
   cd bkkyothi.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   เปิดเบราว์เซอร์และไปที่ `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist/`

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 📄 ส่วนประกอบของเว็บไซต์ (Website Sections)

| Section | Description |
| :--- | :--- |
| **🏠 #ABOUT** | Hero section พร้อมชื่อ ตำแหน่ง และสรุปข้อมูลส่วนตัว |
| **📋 #RESUME** | Timeline การศึกษาและประสบการณ์ทำงาน + Technical Skills |
| **💼 #PORTFOLIO** | แกลเลอรี่โปรเจกต์ที่สามารถกรองตามหมวดหมู่ได้ |
| **📧 #CONTACT** | ฟอร์มติดต่อและ Social Media Links |

---

## 🎨 ธีมสีและการออกแบบ (Design System)

### Color Palette

**Brand Colors:**
```css
/* Primary - Pantone 18-4218 Blue Fusion */
--blue-fusion: #0066CC

/* Secondary - Pantone 16-1523 Cloud Cover */
--cloud-cover: #F4A896
```

**Light Mode:**
```css
--bg-primary: #F9FAFB (Gray-50)
--text-primary: #111827 (Gray-900)
--text-secondary: #374151 (Gray-700)
```

**Dark Mode:**
```css
--bg-primary: #111827 (Gray-900)
--text-primary: #FFFFFF (White)
--text-secondary: #9CA3AF (Gray-400)
```

**Animation Colors (Background Blobs):**
```css
--blob-purple: linear-gradient(135deg, #9333ea, #a855f7)
--blob-pink: linear-gradient(135deg, #ec4899, #f472b6)
--blob-red: linear-gradient(135deg, #ef4444, #f87171)
--blob-indigo: linear-gradient(135deg, #6366f1, #818cf8)
```

### Key Design Principles
- ✅ Large rounded corners (`rounded-3xl`)
- ✅ Soft shadows with depth
- ✅ Glassmorphism effects on navigation
- ✅ Spacious layouts with ample white space
- ✅ Material Design 3 typography scale
- ✅ Smooth transitions (300ms) on all interactive elements
- ✅ Animated gradient mesh background
- ✅ Context-based theme management with localStorage persistence

---

## 🌐 การ Deploy (Deployment)

เว็บไซต์นี้ออกแบบมาเพื่อ Deploy บน **GitHub Pages**

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (ใช้ gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

หรือใช้ GitHub Actions สำหรับ Auto-deployment

---

## 👨‍💻 ผู้พัฒนา (Developer)

<div align="center">

**Kriangkrai Yothi**

Computer Science Graduate | Full-Stack Developer & Technical Designer

[![Email](https://img.shields.io/badge/Email-kriangkai.yot%40thaimooc.ac.th-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:kriangkai.yot@thaimooc.ac.th)
[![GitHub](https://img.shields.io/badge/GitHub-bkkyothi-181717?style=flat&logo=github)](https://github.com/bkkyothi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com)

</div>

---

## 📝 License

Copyright © 2026 **Kriangkrai Yothi**. All rights reserved.

---

<div align="center">
  <sub>Built with ❤️ using React, TypeScript, and Tailwind CSS • Inspired by Google Messages Design</sub>
</div>
