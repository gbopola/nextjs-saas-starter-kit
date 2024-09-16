import { Metadata } from 'next';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import PlausibleProvider from 'next-plausible';

const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="nextjs-saas-starter-kit.vercel.app" />
      </head>
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        <Suspense>
          <Toaster />
        </Suspense>{' '}
      </body>
    </html>
  );
}
