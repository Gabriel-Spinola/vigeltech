'use client'

import React, { useContext } from 'react'
import Carousel from './Carousel'
import styles from '../styles/carousel.module.scss'
import Image from 'next/image'
import useSlideUpAnimation from '../_hooks/useSlideUpAnimation'
import { TranslationContext } from '../_providers/translationContext'

export default function Portfolio() {
  const isVisible = useSlideUpAnimation('portfolio')
  const translationContext = useContext(TranslationContext)
  const translation = translationContext?.translation.portfolioSection

  return (
    <section
      id="portfolio"
      className={`px-2 md:px-4 lg:px-32 pt-16 mb-4 flex flex-col gap-20 ${styles.carouselContainer} ${isVisible ? 'section-show' : 'section-hidden'}`}
    >
      <h1 className="text-5xl text-gray text-center overflow-y-hidden">
        {translation?.title1}{' '}
        <span className="text-redlight">{translation?.title2}</span>
      </h1>
      <Carousel />
      <section className="flex flex-col gap-4">
        <aside className="flex gap-6 lg:gap-16 items-center justify-center">
          <a
            className="w-28 h-28 lg:w-44 lg:h-44 relative rounded-full overflow-hidden drop-shadow opacity-75 lg:hover:scale-105 hover:opacity-100"
            href={'https://youtube.com/vittozao'}
            target="_blank"
          >
            <Image
              src={'/assets/vitto.png'}
              alt={''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>
          <a
            className="w-28 h-28 lg:w-44 lg:h-44 relative rounded-full overflow-hidden bg-darkblue drop-shadow opacity-75 lg:hover:scale-105 hover:opacity-100"
            href={'#'}
            target="_blank"
          >
            <Image
              src={'/assets/harpya.png'}
              alt={''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>
          <a
            className="w-28 h-28 lg:w-44 lg:h-44 relative rounded-full overflow-hidden drop-shadow opacity-75 lg:hover:scale-105 hover:opacity-100"
            href={'https://www.fiemg.com.br/senai/'}
            target="_blank"
          >
            <Image
              src={'/assets/senai.png'}
              alt={''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>
        </aside>
      </section>
    </section>
  )
}
