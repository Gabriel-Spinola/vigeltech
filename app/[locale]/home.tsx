'use client'

import React from 'react'
import { TranslationContext } from '../providers/translationContext'
import styles from '@/app/styles/main.module.scss'
import Footer from '../components/Footer'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Portfolio from '../components/Portfolio'
import { ImplLocale, LocaleTranslation } from './getTranslations'

export default function Main({
  translation,
}: {
  translation: LocaleTranslation<ImplLocale>
  locale: ImplLocale
}) {
  return (
    <>
      <TranslationContext.Provider value={{ translation }}>
        <main
          className={`flex-1 relative pb-16 bg-white w-full ${styles.main}`}
        >
          <Services />
          <AboutUs />
          <Portfolio />
        </main>
        <Footer />
      </TranslationContext.Provider>
    </>
  )
}
