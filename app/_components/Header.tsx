import React from 'react'
import Link from 'next/link'
import { getTranslation, ImplLocale } from '../[locale]/getTranslations'

export default async function Header({ locale }: { locale: ImplLocale }) {
  const translation = await getTranslation(locale)

  return (
    <>
      <header className="flex items-center justify-center h-[120px] z-10">
        <nav className="flex items-center justify-between max-w-[500px] gap-12 mx-auto px-12 py-4 bg-gray/20 rounded-lg font-medium backdrop-blur-sm">
          <Link href={'#services-section'}>{translation.services}</Link>
          <Link href={'#about-us'}>{translation.about}</Link>
          <Link href={'#contact'}>{translation.contact}</Link>
        </nav>
      </header>
    </>
  )
}
