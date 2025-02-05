import type { Metadata } from 'next'
import '../globals.css'
import 'material-symbols'
import BackgroundLines from '../_components/BackgroundLines'
import { Rokkitt, Inter } from 'next/font/google'

const rokkitt = Rokkitt({
  subsets: ['latin'],
  variable: '--font-rokkitt',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vigel | Sua ideia tornando realidade',
  description:
    'Somos uma empresa especializada em desenvolvimento de aplicativos mobile e desktop criação desites e sistemas, além de oferecer serviços de design.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth focus:scroll-auto">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${rokkitt.variable} ${inter.variable} w-full text-center antialiased flex flex-col min-h-screen bg-graylight font-sans relative overflow-x-hidden`}
      >
        <BackgroundLines />
        {children}
      </body>
    </html>
  )
}
