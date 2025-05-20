'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selamat Datang di Web Adopsi Hewan</h1>
      <p className={styles.subtitle}>Temukan sahabat barumu di sini 🐶🐱</p>

      <Link href="/login" className={styles.button}>
        Masuk ke Akun
      </Link>
    </div>
  );
}
