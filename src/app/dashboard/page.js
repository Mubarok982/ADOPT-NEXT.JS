'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');  // ✅ Pindahkan ke dalam useEffect
    }
  }, [status, router]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'unauthenticated') return <p>Mengalihkan ke login...</p>;

  return (
    <div>
      Welcome to the Dashboard, {session?.user?.email}
    </div>
  );
};

export default DashboardPage;
