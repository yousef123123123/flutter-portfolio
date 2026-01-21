# إعادة رفع المشروع على Vercel 🚀

## الطريقة السريعة (موصى بها) ⚡

### إذا كان المشروع مربوط بـ GitHub:
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. افتح مشروعك
3. اضغط على **"Redeploy"** أو **"Deploy"**
4. Vercel سيعيد النشر تلقائياً!

---

## الطريقة الثانية: استخدام Vercel CLI

### الخطوة 1: تثبيت Vercel CLI
افتح Terminal في مجلد المشروع ونفذ:
```bash
npm install -g vercel
```

### الخطوة 2: تسجيل الدخول
```bash
vercel login
```

### الخطوة 3: رفع التعديلات
```bash
vercel --prod
```

---

## الطريقة الثالثة: ربط مع GitHub (للنشر التلقائي)

### إذا لم يكن المشروع مربوط بـ GitHub بعد:

1. **إنشاء repository على GitHub:**
   - اذهب إلى [GitHub](https://github.com)
   - اضغط "New Repository"
   - سمي المشروع واضغط "Create"

2. **ربط المشروع:**
   ```bash
   git init
   git add .
   git commit -m "Update portfolio"
   git branch -M main
   git remote add origin https://github.com/yousef123123123/flutter-portfolio.git
   ```

3. **ربط Vercel:**
   - اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
   - اضغط "Add New Project"
   - اختر المشروع من GitHub
   - اضغط "Deploy"

**بعدها، كل مرة ترفع تغييرات على GitHub، Vercel سينشر تلقائياً!** ✨

---

## ملاحظات مهمة ✅

- تأكد أن جميع التعديلات مح
   git push -u origin mainفوظة
- تأكد أن المشروع يعمل محلياً (`npm run dev`)
- ملف `vercel.json` موجود وجاهز
