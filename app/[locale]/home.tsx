'use client'

import Image from 'next/image'
import { TranslationContext } from '../_providers/translationContext'
import useSlideUpAnimation from '../_hooks/useSlideUpAnimation'
import styles from '@/app/styles/main.module.scss'
import { ImplLocale, LocaleTranslation } from './getTranslations'
import Footer from '../_components/Footer'

export default function Main({
  translation,
}: {
  translation: LocaleTranslation<ImplLocale>
  locale: ImplLocale
}) {
  const isServicesVisible = useSlideUpAnimation('services-section')
  const isAboutVisible = useSlideUpAnimation('about-us')
  const isPortfolioVisible = useSlideUpAnimation('portfolio')

  return (
    <>
      <TranslationContext.Provider value={{ translation }}>
        <main
          className={`flex-1 relative pb-16 bg-white w-full ${styles.main}`}
        >
          {/* Services Section */}
          <section
            id="services-section"
            className={`flex flex-col items-center gap-16 py-16 px-12 md:px-32 ${
              isServicesVisible ? 'section-show' : 'section-hidden'
            }`}
          >
            <h1 className="text-5xl text-darkblue font-rokkitt font-bold">
              {translation.servicesSection?.title1}{' '}
              <span className="text-redlight">
                {translation.servicesSection?.title2}
              </span>
            </h1>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {translation.servicesSection?.services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 p-8 rounded-xl bg-graylight shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h2 className="text-2xl font-bold text-darkblue">
                    {service.title}
                  </h2>
                  <p className="text-center text-gray">{service.text}</p>
                </div>
              ))}
            </section>
          </section>

          {/* About Us Section */}
          <section
            className={`px-12 md:px-32 md:pb-36 lg:pb-44 lg:pt-12 bg-redlight overflow-hidden ${styles.aboutUsContainer}`}
          >
            <section
              id="about-us"
              className={`flex flex-col lg:flex-row items-start md:items-center md:justify-around md:gap-16 py-16 ${
                isAboutVisible ? 'section-show' : 'section-hidden'
              }`}
            >
              <div>
                <div className="text-xl text-left text-[#fff] max-w-xl">
                  <h2 className="lg:text-left overflow-y-hidden text-4xl md:text-5xl pb-4 text-[#fff]">
                    {translation.aboutSection?.whoWeAreTitle}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-left">
                    {translation.aboutSection?.whoWeAreText}
                  </p>
                </div>
              </div>
              <div className="translate-y-11">
                <div className="text-xl text-[#fff] max-w-xl">
                  <h2 className="text-left pb-2 overflow-y-hidden text-4xl md:text-4xl text-[#fff]">
                    {translation.aboutSection?.ourVisionTitle}
                  </h2>
                  <p className="text-lg md:text-xl text-left">
                    {translation.aboutSection?.ourVisionText}
                  </p>
                </div>
              </div>
            </section>
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className={`flex flex-col items-center gap-16 py-16 px-12 md:px-32 ${styles.portfolioContainer} ${
              isPortfolioVisible ? 'section-show' : 'section-hidden'
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl text-darkblue">
                {translation.portfolioSection?.title1}{' '}
                <span className="text-redlight">
                  {translation.portfolioSection?.title2}
                </span>
              </h1>
              <h2 className="text-2xl text-gray">
                {translation.portfolioSection?.title3}
              </h2>
            </div>
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
        </main>

        <Footer />
      </TranslationContext.Provider>
    </>
  )
}
