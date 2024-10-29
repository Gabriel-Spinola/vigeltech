'use client'

import React, { useContext } from 'react'
import styles from '@/app/styles/services.module.scss'
import useSlideUpAnimation from '../_hooks/useSlideUpAnimation'
import { TranslationContext } from '../_providers/translationContext'

export default function Services() {
  const translationContext = useContext(TranslationContext)
  const services = translationContext?.translation.servicesSection?.services
  const translation = translationContext?.translation.servicesSection

  const isVisible = useSlideUpAnimation('services-section')

  return (
    <>
      <section
        id="services-section"
        className={`${styles.section1} px-32 pb-28 flex flex-col gap-16 w-full items-center snap-start ${isVisible ? 'section-show' : 'section-hidden'}`}
      >
        <h2
          className={`${styles.section1Title} text-5xl text-gray text-left w-full`}
        >
          {translation?.title1}{' '}
          <span className="text-redlight">{translation?.title2}</span>
        </h2>
        <ul className="text-reddark flex flex-col gap-8 text-xl w-full">
          {services?.map((service, index) => (
            <li key={index} className="w-full flex justify-between p-4">
              <div className="flex flex-row items-center gap-4">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
              </div>
              <p className="max-w-[768px]">{service.text}</p>
            </li>
          ))}
        </ul>
        <button className="max-w-128 text-2xl border-2 text-[#fff] px-16 py-4 rounded-xl bg-redlight hover:bg-[#fff] hover:border-2 border-redlight hover:text-redlight">
          {translation?.contactUs}
        </button>
      </section>
    </>
  )
}
