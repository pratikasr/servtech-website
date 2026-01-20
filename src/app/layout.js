import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: 'Servtech - IT Consultancy & System Integration | Navi Mumbai',
    template: '%s | Servtech'
  },
  description: 'Leading IT consultancy and system integration firm in Navi Mumbai. Specializing in cloud solutions, AI, cybersecurity, software development, and enterprise solutions for digital transformation.',
  keywords: [
    'IT consultancy Mumbai',
    'system integration Navi Mumbai',
    'cloud solutions India',
    'AI services',
    'cybersecurity Mumbai',
    'digital transformation',
    'ERP implementation',
    'software development India',
    'managed IT services'
  ],
  authors: [{ name: 'Servtech' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://servtech.in',
    siteName: 'Servtech',
    title: 'Servtech - IT Consultancy & System Integration',
    description: 'Your trusted partner in digital transformation. One-stop IT solutions for modern businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SERVTECH_21',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: '60px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
