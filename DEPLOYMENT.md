# 🚀 Deployment Guide

## การ Deploy ไปยัง GitHub Pages

### วิธีที่ 1: GitHub Actions (แนะนำ - Auto Deploy)

1. **Enable GitHub Pages ใน Repository Settings:**
   - ไปที่ `Settings` > `Pages`
   - ใน `Source` เลือก `GitHub Actions`

2. **Push code ขึ้น GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **รอให้ GitHub Actions Deploy:**
   - ไปที่ tab `Actions` ใน GitHub repository
   - รอให้ workflow `Deploy to GitHub Pages` เสร็จสิ้น (ประมาณ 1-2 นาที)

4. **เข้าใช้งานเว็บไซต์:**
   - เว็บไซต์จะอยู่ที่: `https://bkkyothi.github.io/bkkyothi.github.io/`

---

### วิธีที่ 2: Manual Deploy ด้วย gh-pages

1. **ติดตั้ง gh-pages package:**
   ```bash
   npm install -D gh-pages
   ```

2. **เพิ่ม scripts ใน package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## **Note:**
- ✅ GitHub Actions workflow ถูกสร้างไว้แล้วที่ `.github/workflows/deploy.yml`
- ✅ Vite config ถูกตั้งค่า `base` path แล้ว
- ✅ ทุกครั้งที่ push ไป main branch จะ deploy อัตโนมัติ

## Troubleshooting

### ถ้าหน้าเว็บแสดงว่าง (blank page):
1. ตรวจสอบ `base` path ใน `vite.config.ts`
2. ตรวจสอบว่า GitHub Pages source ถูกตั้งเป็น `GitHub Actions`

### ถ้า CSS/JS ไม่โหลด:
- ตรวจสอบว่า `base` path ตรงกับชื่อ repository

---

**การอัปเดตเว็บไซต์:**
```bash
# แก้ไขโค้ด
git add .
git commit -m "Update website"
git push origin main
# GitHub Actions จะ deploy อัตโนมัติ
```
