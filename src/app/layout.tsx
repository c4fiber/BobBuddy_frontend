import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bobbuddy',
  description: '점심시간에 잠깐 만날 수 있는 매칭 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <meta name='theme-color' content='#0097B2;' />
            <link rel='manifest' href='/manifest.json' />
            <link rel='icon' href='/assets/icons/icon-48x48.png' />
            <link rel='apple-touch-icon' href='/assets/icons/icon-192x192.png' />
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
