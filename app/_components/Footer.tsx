'use client'

import React, { useContext } from 'react'
import styles from '../styles/footer.module.scss'
import { TranslationContext } from '../_providers/translationContext'

export default function Footer() {
  const localeContext = useContext(TranslationContext)
  const locale = localeContext?.translation.footer

  return (
    <footer
      id="contact"
      className={`flex flex-col lg:items-center px-6 gap-32 w-full py-12 bg-black text-white text-center justify-center ${styles.footerContainer}`}
    >
      <article className="flex flex-col w-full gap-8 text-left lg:text-center">
        <h1 className="text-5xl font-bold text-redlight text-center">
          {locale?.title}
        </h1>
        <p className="text-graylight text-lg md:text-xl text-center">
          {locale?.description}
          <br className="hidden lg:flex" />
          {locale?.description2}
        </p>

        <div className="flex flex-row gap-8 align-middle justify-center">
          <button
            className="lg:w-[16vw] w-[40vw] h-[8vh] lg:h-[5.5vh] text-base md:text-xl shadow-lg rounded-lg shadow-reddark bg-redlight border-graylight hover:ease-in transition-all duration-100 ease-in-out hover:bg-graylight hover:border hover:border-graylight hover:text-redlight hover:scale-105"
            onClick={() =>
              (window.location.href = 'https://calendly.com/vigelbiz7/30min')
            }
          >
            {locale?.buttons.scheduleCall}
          </button>
          <button
            className="lg:w-[16vw] w-[40vw] h-[8vh] lg:h-[5.5vh] text-base md:text-xl shadow-lg shadow-reddark rounded-lg border-redlight border hover:text-redlight transition-all duration-150 hover:scale-105"
            onClick={() =>
              (window.location.href = 'mailto:vigelcontato@gmail.com')
            }
          >
            {locale?.buttons.sendEmail}
          </button>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row gap-24 lg:gap-36 text-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-graylight font-bold text-2xl">Vigel</h2>
          <span>{locale?.contactInfo.from}</span>
          <span className="text-base">{locale?.contactInfo.phone1}</span>
          <span className="text-base">{locale?.contactInfo.phone2}</span>
          <span className="text-base">
            Email:{' '}
            <a href="mailto:vigelcontato@gmail.com">vigelcontato@gmail.com</a>
          </span>

          {/* TODO -  Social medias */}
          <div className="flex flex-row gap-6">
            {/* <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a> */}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Links</h2>
          <a href="#">{locale?.links.services}</a>
          <a href="#">{locale?.links.aboutUs}</a>
          <a href="#">{locale?.links.projects}</a>
          <a href="#">{locale?.links.contact}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{locale?.services.title}</h2>
          <a href="#">{locale?.services.mobileDev}</a>
          <a href="#">{locale?.services.saasDev}</a>
          <a href="#">{locale?.services.apiDev}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{locale?.links.contact}</h2>
          <span>
            <b>Email:</b>{' '}
            <a href="mailto:vigelcontato@gmail.com">vigelcontato@gmail.com</a>
          </span>
          <span>
            <b>Tel:</b> <a href="#">+55 (31) 9 8865-4602</a>
          </span>

          <div className="">
            <span>
              <b>Address</b>{' '}
            </span>

            <h4>{locale?.contactInfo.operatingHours.title}</h4>
            <span>{locale?.contactInfo.operatingHours.hours}</span>
          </div>
        </div>
      </article>

      <div>
        <p>
          <a href="#">{locale?.terms}</a>
        </p>
        <p>© 2024 Vigel </p>
      </div>
    </footer>
  )
}
