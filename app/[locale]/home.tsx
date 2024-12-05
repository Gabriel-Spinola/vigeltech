'use client'

import React from 'react'
import { TranslationContext } from '../_providers/translationContext'
import styles from '../styles/main.module.scss'
import Footer from '../_components/Footer'
import Services from '../_components/Services'
import AboutUs from '../_components/AboutUs'
import Portfolio from '../_components/Portfolio'
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
