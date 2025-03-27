'use client'

import { useEffect, useRef } from 'react'
import { TranslationContext } from '../_providers/translationContext'
import styles from '@/app/styles/main.module.scss'
import { ImplLocale, LocaleTranslation } from './getTranslations'
import Image from 'next/image'

export default function Main({
  translation,
}: {
  translation: LocaleTranslation<ImplLocale>
  locale: ImplLocale
}) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeGridItem = (item: HTMLElement) => {
      const rowHeight = 20 // altura base em pixels
      const rowGap = parseInt(
        window.getComputedStyle(gridRef.current!).getPropertyValue('grid-gap'),
      )

      const contentHeight = item.getBoundingClientRect().height
      const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap))
      item.style.gridRowEnd = `span ${rowSpan}`
    }

    const resizeAllGridItems = () => {
      const allItems = document.getElementsByClassName(styles.portfolioCard)
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x] as HTMLElement)
      }
    }

    // Executar após as imagens carregarem
    window.addEventListener('load', resizeAllGridItems)
    window.addEventListener('resize', resizeAllGridItems)

    // Primeira execução
    resizeAllGridItems()

    return () => {
      window.removeEventListener('load', resizeAllGridItems)
      window.removeEventListener('resize', resizeAllGridItems)
    }
  }, [])

  if (!translation) return null
  return (
    <TranslationContext.Provider value={{ translation }}>
      <main className={`flex-1 relative bg-white w-full ${styles.main}`}>
        <section className={styles.mainTitle}>
          <h1 className={styles.titleContainer}>
            {translation.headerTitle?.map((title, index) => (
              <span key={`title-${index}`}>{title}</span>
            ))}
          </h1>
          <h2 className={styles.subTitleContainer}>
            {translation.subHeaderTitle}
          </h2>
        </section>
        <section className={styles.servicesContainer}>
          <h1 className={styles.servicesTitle}>
            {translation.servicesSection?.title}
          </h1>
          <div className={styles.services}>
            {translation.servicesSection?.services.map((service, index) => (
              <div key={`service-${index}`} className={styles.service}>
                <div className={styles.serviceImageContainer}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.serviceTitleIcon}>
                  <span className="material-symbols-outlined text-3xl lg:text-3xl overflow-x-visible">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h3>{translation.aboutSection?.whoWeAreTitle}</h3>
            <p>{translation.aboutSection?.whoWeAreText}</p>
          </div>
          <div className={styles.aboutContent}>
            <h3>{translation.aboutSection?.ourVisionTitle}</h3>
            <p>{translation.aboutSection?.ourVisionText}</p>
          </div>
        </section>
        <section className={styles.consultancyContainer}>
          <div className={styles.consultancyImageContainer}></div>
          <div className={styles.consultancyContent}>
            <h3>{translation.consultancySection?.title}</h3>
            <ul>
              {translation.consultancySection?.subtitles.map(
                (subtitle, index) => (
                  <li key={`subtitle-${index}`}>{subtitle}</li>
                ),
              )}
              <a href="#" className={styles.consultancyButton}>
                {translation.consultancySection?.button}
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.portfolioContainer}>
          <h2 className={styles.portfolioTitle}>
            {translation.portfolioSection?.title1}{' '}
            {translation.portfolioSection?.title2}{' '}
          </h2>
          <div className={styles.portfolioCards} ref={gridRef}>
            {translation.portfolioCards?.map((card, index) => (
              <div key={`card-${index}`} className={styles.portfolioCard}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div
                  className={`${styles.portfolioCardImageContainer} rounded-lg overflow-hidden`}
                >
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className={styles.portfolioCardImage}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </TranslationContext.Provider>
  )
}
