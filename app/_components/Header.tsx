import React from 'react'
import { getTranslation, ImplLocale } from '../[locale]/getTranslations'
import styles from '@/app/styles/header.module.scss'
import BurguerMenu from './BurguerMenu'

export default async function Header({ locale }: { locale: ImplLocale }) {
  const translation = await getTranslation(locale)
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        {translation.headerOptions?.map((headerOption: string, index) => (
          <a href="#" className={styles.headerNavLi} key={index}>
            {headerOption}
          </a>
        ))}
      </nav>
      <BurguerMenu />
    </header>
  )
}
