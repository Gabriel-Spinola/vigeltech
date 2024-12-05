'use client'

import React, { useContext, useState } from 'react'
import styles from '../styles/services.module.scss'
import useSlideUpAnimation from '../_hooks/useSlideUpAnimation'
import { TranslationContext } from '../_providers/translationContext'
import useIsMobile from '../_hooks/useIsMobile'

export default function Services() {
  const translationContext = useContext(TranslationContext)
  const services = translationContext?.translation.servicesSection?.services
  const translation = translationContext?.translation.servicesSection

  const isVisible = useSlideUpAnimation('services-section')
  const lgScreenSize = 976

  const isMobile = useIsMobile(lgScreenSize)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number | null) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index)
    }
  }

  return (
    <section
      id="services-section"
      className={`${styles.section1} lg:px-16 xl:px-32 pb-28 flex flex-col gap-16 w-full items-center snap-start ${isVisible ? 'section-show' : 'section-hidden'}`}
    >
      <h2
        className={`${styles.section1Title} text-5xl text-gray text-center overflow-y-hidden lg:text-left w-full`}
      >
        {translation?.title1}{' '}
        <span className="text-redlight">{translation?.title2}</span>
      </h2>
      <ul className="text-reddark flex flex-col gap-8 text-xl w-full">
        {services?.map((service, index) => (
          <li
            key={index}
            className="w-full flex flex-col text-left lg:flex-row lg:justify-between p-4 gap-2 cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div
              className={`flex flex-row md:pl-[15vw] lg:pl-0 justify-start items-center gap-4 transition-transform ease-in-out overflow-x-visible ${
                expandedIndex === index ? 'justify-center pl-0' : ''
              }`}
            >
              <span className="material-symbols-outlined text-3xl lg:text-3xl overflow-x-visible">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden md:justify-items-center ${
                expandedIndex === index || !isMobile
                  ? 'max-h-screen opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
              style={{
                maxHeight: expandedIndex === index || !isMobile ? '200px' : '0',
              }}
            >
              <p className="max-h-screen md:max-w-screen-md text-lg md:text-xl md:self-center md:text-center lg:max-w-[500px] xl:max-w-[768px] lg:text-left mt-2 md:mt-4">
                {service.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="max-w-128 text-2xl border-2 text-[#fff] px-16 py-4 rounded-xl bg-redlight hover:bg-[#fff] hover:border-2 border-redlight hover:text-redlight">
        {translation?.contactUs}
      </button>
    </section>
  )
}
