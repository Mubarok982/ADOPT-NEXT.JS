import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Lakukan validasi email dan password dari database atau sumber lainnya
        const user = { id: 1, email: credentials.email }; // Contoh user, ganti dengan validasi dari DB

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Mengarahkan ke halaman login jika belum login
  },
  session: {
    strategy: "jwt", // Menggunakan JWT untuk session
  },
});

export { handler as GET, handler as POST };
