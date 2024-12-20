import type { Metadata } from 'next'
import '../globals.css'
import 'material-symbols'

// NOTE - Fonts imports

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
    <html lang="pt-br" className="scrool-smooth focus:scroll-auto">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`w-full text-center antialiased flex flex-col min-h-screen bg-graylight font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
