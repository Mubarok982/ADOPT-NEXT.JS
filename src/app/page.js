'use client'; 

import './globals.css'; 
import Link from 'next/link';
import styles from './page.module.css'; 


export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>Pet Friends</div>
        <nav className={styles.navLinks}>
          {/* Link navigasi di sini */}
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          {/* ... link lainnya */}
        </nav>
        <div className={styles.authButtons}>
          {/* Tombol Sign In & Register di sini */}
          <Link href="/login" className={styles.signInButton}>Sign In</Link>
          <Link href="/register" className={styles.registerButton}>Register</Link>
        </div>
      </header>
      <main className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.textColumn}>
            <h1 className={styles.title}>Find Your Perfect Buddy</h1>
            <p className={styles.subtitle}>Shaping a brighter future for stray dogs around the world!</p>
            <Link href="/get-started" className={styles.button}>
              Get Started
            </Link>
          </div>
          <div className={styles.imageColumn}>
            <img src="cat.jpg" alt="Happy dogs" className={styles.heroImage} />
          </div>
        </div>
      </main>
    </div>
  );
}