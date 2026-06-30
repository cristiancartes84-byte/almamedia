'use client';

import { usePathname } from 'next/navigation';
import Ticker from './Ticker';
import Header from './Header';
import Footer from './Footer';
import CatCursor from './CatCursor';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <CatCursor />
      <Ticker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
