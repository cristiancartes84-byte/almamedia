'use client';
import { SessionProvider } from 'next-auth/react';
import AdminBar from './AdminBar';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminBar />
      {children}
    </SessionProvider>
  );
}
