import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tutku Matbaa Reklam',
  description: 'Dijital Baskı, Reklam ve Matbaa Hizmetleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html >
  )
}
