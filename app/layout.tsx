import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Recy-Kab | Kabelrecycling & Koperverwerking',
  description: 'Recy-Kab is gespecialiseerd in het milieuvriendelijk recyclen van kabelafval, koperhoudende elementen, inox en aluminium. Samen bouwen aan een circulaire toekomst.',
  keywords: 'kabelrecycling, koperrecycling, aluminium recycling, inox recycling, circulaire economie, duurzaam, milieuvriendelijk',
  openGraph: {
    title: 'Recy-Kab | Kabelrecycling & Koperverwerking',
    description: 'Specialist in milieuvriendelijk recyclen van kabelafval en koperhoudende elementen.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
