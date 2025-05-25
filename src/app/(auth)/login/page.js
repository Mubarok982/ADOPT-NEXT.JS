// app/(auth)/login/page.js
'use client';

import Link from 'next/link';
import styles from './login.module.css'; 
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [error, setError] = useState(''); // State untuk pesan error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulasi proses login
    // GANTILAH BAGIAN INI DENGAN LOGIKA LOGIN ANDA YANG SEBENARNYA (misalnya, pemanggilan API)
    console.log('Proses login dengan:', { email, password });
    try {
      // Contoh simulasi pemanggilan API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Tunggu 1.5 detik

      // Contoh validasi sederhana (ganti dengan validasi sesungguhnya)
      if (email === 'user@example.com' && password === 'password123') {
        console.log('Login berhasil!');
        alert('Login berhasil!'); // Ganti dengan navigasi atau manajemen state
        // Contoh: router.push('/dashboard');
      } else {
        setError('Email atau password salah. Silakan coba lagi.');
      }
    } catch (err) {
      console.error('Error saat login:', err);
      setError('Terjadi kesalahan saat mencoba login. Silakan coba beberapa saat lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logoHeader}>
          {/* Anda bisa menambahkan logo di sini jika mau, misalnya:
          <img src="/logo-petfriends.svg" alt="Pet Friends Logo" className={styles.logoImage} />
          */}
          <h1 className={styles.pageTitle}>Masuk Akun</h1>
          <p className={styles.pageSubtitle}>Selamat datang kembali! Silakan masukkan detail Anda.</p>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email atau Username</label>
            <input
              type="email" // atau "text" jika bisa username
              id="email"
              name="email" // Tambahkan atribut name untuk form handling yang lebih baik
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="contoh@email.com"
              disabled={isLoading} // Nonaktifkan input saat loading
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password" // Tambahkan atribut name
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Masukkan password Anda"
              disabled={isLoading} // Nonaktifkan input saat loading
            />
          </div>
          <div className={styles.forgotPassword}>
            <Link href="/forgot-password" className={styles.link}>
              Lupa password?
            </Link>
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>
        <div className={styles.alternativeAction}>
          <p>
            Belum punya akun?{' '}
            <Link href="/register" className={styles.linkPrimary}>
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
