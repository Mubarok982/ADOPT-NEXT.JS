'use client';

import { SessionProvider } from 'next-auth/react';
import './globals.css'; // pastikan kamu tetap mengimpor CSS global di sini

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
