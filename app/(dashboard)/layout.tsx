import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      {/* <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main> */}
      {children}
    </div>
  );
}
