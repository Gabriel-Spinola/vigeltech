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
    <section className={`px-32 pb-40 bg-redlight ${styles.aboutUsContainer}`}>
      <section
        id="about-us"
        className={`flex flex-row items-center justify-around gap-16 py-16 ${styles.aboutUs} ${isVisible ? 'section-show' : 'section-hidden'}`}
      >
        <div>
          {/* Container for the right side */}
          <div className="text-xl text-[#fff] max-w-xl">
            <h2 className="text-5xl text-[#fff]">
              {translation?.whoWeAreTitle}
            </h2>
            {/* Adjusted max-width */}
            <p>{translation?.whoWeAreText}</p>
          </div>
        </div>

        <div className=" translate-y-11">
          {/* Container for the left side */}
          <div className="text-xl text-[#fff] max-w-xl">
            <h2 className="text-5xl text-[#fff]">
              {translation?.ourVisionTitle}
            </h2>
            {/* Adjusted max-width */}
            <p>{translation?.ourVisionText}</p>
          </div>
        </div>
      </section>
    </section>
  )
}
