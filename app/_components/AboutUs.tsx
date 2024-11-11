'use client'

import React, { useContext } from 'react'
import styles from '@/app/styles/aboutus.module.scss'
import useSlideUpAnimation from '../_hooks/useSlideUpAnimation'
import { TranslationContext } from '../_providers/translationContext'

export default function AboutUs() {
  const translationContext = useContext(TranslationContext)
  const translation = translationContext?.translation.aboutSection
  const isVisible = useSlideUpAnimation('about-us')

  return (
    <section
      className={`px-12 md:px-32 md:pb-36 lg:pb-44 lg:pt-12 bg-redlight overflow-hidden ${styles.aboutUsContainer}`}
    >
      <section
        id="about-us"
        className={`flex flex-col lg:flex-row items-start md:items-center md:justify-around md:gap-16 py-16 ${styles.aboutUs} ${isVisible ? 'section-show' : 'section-hidden'}`}
      >
        <div>
          <div className="text-xl text-left text-[#fff] max-w-xl">
            <h2 className="lg:text-left overflow-y-hidden text-4xl md:text-5xl pb-4 text-[#fff]">
              {translation?.whoWeAreTitle}
            </h2>
            <p className="text-lg md:text-xl lg:text-left">
              {translation?.whoWeAreText}
            </p>
          </div>
        </div>

        <div className=" translate-y-11">
          <div className="text-xl text-[#fff] max-w-xl">
            <h2 className="text-left pb-2 overflow-y-hidden text-4xl md:text-4xl text-[#fff]">
              {translation?.ourVisionTitle}
            </h2>
            <p className="text-lg md:text-xl text-left">
              {translation?.ourVisionText}
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
