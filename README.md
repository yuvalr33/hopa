# 🚗 Hoppa — Next.js 14

## הרצה מקומית

```bash
# פתח טרמינל ב-VS Code

npm install   # פעם אחת
npm run dev   # הרץ
```

פתח: **http://localhost:3000**

---

## מבנה הפרויקט

```
src/
├── app/
│   ├── layout.jsx        ← Root layout (phone shell)
│   ├── globals.css       ← עיצוב גלובלי
│   ├── page.jsx          ← Redirect → /splash
│   ├── splash/page.jsx   ← מסך פתיחה
│   ├── welcome/page.jsx  ← ברוכים הבאים
│   ├── profile/page.jsx  ← הגדרת פרופיל
│   ├── home/page.jsx     ← מסך הבית
│   ├── create/page.jsx   ← יצירת נסיעה
│   ├── search/page.jsx   ← חיפוש נסיעה
│   └── rides/page.jsx    ← הנסיעות שלי
├── components/
│   ├── HoppaLogo.jsx
│   ├── BottomNav.jsx
│   └── ScreenHeader.jsx
└── lib/
    └── data.js           ← ערים + נתוני דמו
```

## השלב הבא — Supabase

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

צור קובץ `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```
