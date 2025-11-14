import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Ayushman Vishwakarma | Full Stack Developer',
  description: 'Professional portfolio of Ayushman Vishwakarma - Full Stack Developer, UI/UX Designer, and Web Developer. Specializing in React, Node.js, and modern web technologies.',
  keywords: 'developer, portfolio, react, full-stack, web development',
  authors: [{ name: 'Ayushman Vishwakarma' }],
  creator: 'Ayushman Vishwakarma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayushman-portfolio.com',
    title: 'Ayushman Vishwakarma | Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects and skills',
    siteName: 'Ayushman Portfolio',
    images: [
      {
        url: '/professional-profile.png',
        width: 1200,
        height: 630,
        alt: 'Ayushman Vishwakarma',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/professional-profile.png" />
        <link rel="apple-touch-icon" href="/professional-profile.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
