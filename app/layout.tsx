import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Henrique Sagawa | Desenvolvedor Full Stack',
  description: 'Portfólio de Henrique Sagawa — Desenvolvedor Full Stack especializado em React, Node.js e TypeScript. Construindo experiências web modernas e performáticas.',
  keywords: ['Desenvolvedor Full Stack', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Portfólio'],
  authors: [{ name: 'Henrique Sagawa' }],
  openGraph: {
    title: 'Henrique Sagawa | Desenvolvedor Full Stack',
    description: 'Portfólio de Henrique Sagawa — Desenvolvedor Full Stack especializado em React, Node.js e TypeScript.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
