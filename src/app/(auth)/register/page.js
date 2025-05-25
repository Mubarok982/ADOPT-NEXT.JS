// app/(auth)/register/page.js
'use client';

import Link from 'next/link';
import styles from './register.module.css'; // Mengimpor CSS module
import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      setIsLoading(false);
      return;
    }

    // Validasi panjang password (contoh)
    if (password.length < 8) {
      setError("Password minimal harus 8 karakter.");
      setIsLoading(false);
      return;
    }

    // Simulasi proses registrasi
    // GANTILAH BAGIAN INI DENGAN LOGIKA REGISTRASI ANDA YANG SEBENARNYA
    console.log('Proses registrasi dengan:', { username, email, password });
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Tunggu 1.5 detik

      // Contoh: Anggap registrasi selalu berhasil untuk demo
      setSuccessMessage('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
      console.log('Registrasi berhasil!');
      // Kosongkan form setelah berhasil
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Contoh: Redirect ke halaman login setelah beberapa saat
      // setTimeout(() => {
      //   router.push('/login');
      // }, 3000);

    } catch (err) {
      console.error('Error saat registrasi:', err);
      setError('Terjadi kesalahan saat mencoba registrasi. Silakan coba beberapa saat lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logoHeader}>
          <h1 className={styles.pageTitle}>Buat Akun Baru</h1>
          <p className={styles.pageSubtitle}>Bergabunglah dengan kami dan temukan teman berbulu Anda!</p>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Pilih username Anda"
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="contoh@email.com"
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Minimal 8 karakter"
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Konfirmasi Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Ulangi password Anda"
              disabled={isLoading}
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>
        <div className={styles.alternativeAction}>
          <p>
            Sudah punya akun?{' '}
            <Link href="/login" className={styles.linkPrimary}>
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
