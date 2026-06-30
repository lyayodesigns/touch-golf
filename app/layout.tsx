import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Touch Golf - The Premium Mini-Golf Experience',
    template: '%s | Touch Golf',
  },
  description: 'Experience the ultimate modern mini-golf journey with Touch Golf. Stunning visuals, dynamic animations, and an engaging atmosphere.',
  keywords: ['golf', 'mini-golf', 'touch golf', 'premium mini-golf', 'golf experience', 'interactive golf'],
  authors: [{ name: 'Lyayo Designs' }],
  creator: 'Lyayo Designs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://touch-golf.vercel.app',
    title: 'Touch Golf - The Premium Mini-Golf Experience',
    description: 'Experience the ultimate modern mini-golf journey with Touch Golf. Stunning visuals, dynamic animations, and an engaging atmosphere.',
    siteName: 'Touch Golf',
    images: [
      {
        url: '/golfwithland.png', // Fallback to an existing image as OG image
        width: 1200,
        height: 630,
        alt: 'Touch Golf Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Touch Golf - The Premium Mini-Golf Experience',
    description: 'Experience the ultimate modern mini-golf journey with Touch Golf.',
    images: ['/golfwithland.png'],
    creator: '@lyayodesigns',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
