# دليل رفع المشروع على Vercel 🚀

## الطريقة الأولى: عن طريق GitHub (موصى بها ⭐)

### الخطوة 1: رفع المشروع على GitHub
1. اذهب إلى [GitHub](https://github.com) وسجل دخول
2. اضغط على "New Repository" 
3. سمي المشروع (مثلاً: `flutter-portfolio`)
4. اضغط "Create Repository"

### الخطوة 2: رفع الكود
في Terminal الخاص بك، نفذ الأوامر التالية:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yousef123123123/flutter-portfolio.git
git push -u origin main
```

> **ملاحظة**: استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك على GitHub

### الخطوة 3: ربط Vercel بـ GitHub
1. اذهب إلى [Vercel](https://vercel.com)
2. سجل دخول بحساب GitHub
3. اضغط "Add New Project"
4. اختر المشروع من قائمة repositories
5. اضغط "Import"
6. Vercel سيتعرف تلقائياً على إعدادات Vite
7. اضغط "Deploy"

---

## الطريقة الثانية: رفع مباشر بدون GitHub 

### الخطوة 1: تنصيب Vercel CLI
```bash
npm install -g vercel
```

### الخطوة 2: تسجيل الدخول
```bash
vercel login
```

### الخطوة 3: رفع المشروع
```bash
vercel
```

اتبع التعليمات على الشاشة:
- **Setup and deploy?** → نعم
- **Which scope?** → اختر حسابك
- **Link to existing project?** → لا
- **Project name:** → اضغط Enter (سيستخدم اسم المجلد)
- **In which directory is your code located?** → اضغط Enter
- **Override settings?** → لا

### الخطوة 4: النشر النهائي (Production)
```bash
vercel --prod
```

---

## ملاحظات مهمة ✅

✅ المشروع جاهز تماماً للرفع  
✅ ملف `vercel.json` موجود للإعدادات  
✅ ملف `.gitignore` موجود  
✅ تم اختبار البناء (Build) بنجاح  

## الإعدادات في Vercel (إذا طلبت منك)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## بعد النشر 🎉

ستحصل على رابط مثل:
```
https://flutter-portfolio-yousef.vercel.app
```

### ربط دومين مخصص (اختياري)
1. من لوحة تحكم Vercel
2. اذهب لـ Project Settings
3. اختر Domains
4. أضف الدومين الخاص بك

---

## تحديث المشروع بعد النشر

### إذا كنت تستخدم GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel سيقوم بالنشر التلقائي عند كل push!

### إذا كنت تستخدم Vercel CLI:
```bash
vercel --prod
```

---

**تم بناء المشروع بنجاح والملفات جاهزة في مجلد `dist/`** ✨
