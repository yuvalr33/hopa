import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// הגדר כאן את הסיומת המורשית, למשל "campus.university.edu" או "mail.huji.ac.il"
const ALLOWED_EMAIL_SUFFIX = "@huji.ac.il"; 

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const email = user.email || profile?.email;
        
        // בדיקה שהמייל מסתיים בסיומת המורשית
        if (email && email.toLowerCase().endsWith(ALLOWED_EMAIL_SUFFIX)) {
          return true;
        } else {
          // דחיית הכניסה
          return "/welcome?error=AccessDenied";
        }
      }
      return true;
    },
  },
  pages: {
    signIn: '/welcome',
    // במידה ויש שגיאת התחברות, הוא יוחזר לעמוד welcome עם פרמטר בשורת הכתובת
    error: '/welcome', 
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
