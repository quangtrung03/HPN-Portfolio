import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Hồ Phi Nhật — Digital Art & Design',
  description: 'Creative Designer crafting visual experiences with digital art and design',
  icons: {
    icon: '/images/logomili.png',
    shortcut: '/images/logomili.png',
    apple: '/images/logomili.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
