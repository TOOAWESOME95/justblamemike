import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import HeavenToggle from './components/HeavenToggle';
import Schema, { orgSchema } from './components/Schema';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleTagManager, { GTMNoScript } from './components/GoogleTagManager';
import CookieConsent from './components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Just Blame Mike | Digital Marketing Agency',
  description: 'PPC management, bespoke websites, and SEO strategies that actually move the needle. We handle the complexity. You take the credit.',
  keywords: 'digital marketing, PPC, Google Ads, Meta Ads, SEO, web design, Manchester',
  metadataBase: new URL('https://justblamemike.com'),
  openGraph: {
    title: 'Just Blame Mike | Digital Marketing Agency',
    description: 'We build your growth engine. Blame Mike.',
    url: 'https://justblamemike.com',
    siteName: 'Just Blame Mike',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Blame Mike - Digital Marketing Agency',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Blame Mike | Digital Marketing Agency',
    description: 'We build your growth engine. Blame Mike.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-display">
        <GoogleTagManager />
        <GTMNoScript />
        <GoogleAnalytics />
        <Schema data={orgSchema()} />
        <ThemeProvider>
          <div className="fixed top-0 left-0 right-0" style={{ zIndex: 9999 }}>
            <HeavenToggle />
            <Header />
          </div>
          <main className="pt-[88px]">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
