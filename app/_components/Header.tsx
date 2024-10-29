import React from 'react'
import styles from '@/app/styles/header.module.scss'
import SmileyIcon from './SmileyIcons'
import Link from 'next/link'
import { getTranslation, ImplLocale } from '../[locale]/getTranslations'

export default async function Header({ locale }: { locale: ImplLocale }) {
  const translation = await getTranslation(locale)

  return (
    <>
      <header
        className={`min-h-[111vh] bg-office-work bg-bottom bg-no-repeat bg-cover py-8 lg:px-32 lg:py-16 ${styles.header}`}
        style={{ backgroundAttachment: 'fixed' }}
      >
        <section
          className={`flex flex-row lg:gap-24 items-center ${styles.headerContent}`}
        >
          <SmileyIcon />
          <section className="flex flex-col w-full gap-24 font-bold">
            <nav className="flex flex-row gap-16 lg:gap-32 text-lightblue font-bold w-full justify-center text-xl lg:text-2xl">
              <Link href={'#services-section'}>{translation.services}</Link>
              <Link href={'#about-us'}>{translation.about}</Link>
              <Link href={'#contact'}>{translation.contact}</Link>
            </nav>
            <h1
              className={`${styles.headerTitle} drop-shadow-lg text-[#fff] text-6xl lg:text-8xl text-justify md:text-center`}
            >
              {translation.headerTitle?.main}{' '}
              <span className="text-redlight">
                {translation.headerTitle?.your}
              </span>{' '}
              {translation.headerTitle?.idea}{' '}
              <span className="text-redlight">
                {translation.headerTitle?.reality}
              </span>
            </h1>
          </section>
          <SmileyIcon />
        </section>
        <div className={`${styles.overlay}`}></div>
      </header>
    </>
  )
}
