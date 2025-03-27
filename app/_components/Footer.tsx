import { getTranslation, ImplLocale } from '../[locale]/getTranslations'
import React from 'react'
import styles from '@/app/styles/footer.module.scss'

export default async function Footer({ locale }: { locale: ImplLocale }) {
  const translation = await getTranslation(locale)
  return (
    <footer
      id="contact"
      className={`flex flex-col lg:items-center px-6 gap-32 w-full py-12 bg-black text-white text-center justify-center ${styles.footerContainer}`}
    >
      <article className="flex flex-col w-full gap-8 text-left lg:text-center">
        <h1 className="text-5xl font-bold text-redlight text-center">
          {translation.footer?.title}
        </h1>
        <p className="text-graylight text-lg md:text-xl text-center">
          <br className="hidden lg:flex" />
        </p>

        <div className="flex flex-row gap-8 align-middle justify-center">
          <a
            href="https://calendly.com/vigelbiz7/30min"
            className="flex items-center justify-center lg:w-[16vw] w-[40vw] h-[8vh] lg:h-[5.5vh] text-base md:text-xl shadow-lg rounded-lg shadow-reddark bg-redlight border-graylight hover:ease-in transition-all duration-100 ease-in-out hover:bg-graylight hover:border hover:border-graylight hover:text-redlight hover:scale-105"
          >
            {translation.footer?.buttons.scheduleCall}
          </a>
          <a
            href="mailto:vigelcontato@gmail.com"
            className="flex items-center justify-center lg:w-[16vw] w-[40vw] h-[8vh] lg:h-[5.5vh] text-base md:text-xl shadow-lg shadow-reddark rounded-lg border-redlight border hover:text-redlight transition-all duration-150 hover:scale-105"
          >
            {translation.footer?.buttons.sendEmail}
          </a>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row gap-24 lg:gap-36 text-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-graylight font-bold text-2xl">Vigel</h2>
          <span>{translation.footer?.contactInfo.from}</span>
          <span className="text-base">
            {translation.footer?.contactInfo.phone1}
          </span>
          <span className="text-base">
            {translation.footer?.contactInfo.phone2}
          </span>
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
          <a href="#">{translation.footer?.links.services}</a>
          <a href="#">{translation.footer?.links.aboutUs}</a>
          <a href="#">{translation.footer?.links.projects}</a>
          <a href="#">{translation.footer?.links.contact}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {translation.footer?.services.title}
          </h2>
          <a href="#">{translation.footer?.services.mobileDev}</a>
          <a href="#">{translation.footer?.services.saasDev}</a>
          <a href="#">{translation.footer?.services.apiDev}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {translation.footer?.links.contact}
          </h2>
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

            <h4>{translation.footer?.contactInfo.operatingHours.title}</h4>
            <span>{translation.footer?.contactInfo.operatingHours.hours}</span>
          </div>
        </div>
      </article>

      <div>
        <p>
          <a href="#">{translation.footer?.terms}</a>
        </p>
        <p>© 2024 Vigel </p>
      </div>
    </footer>
  )
}
