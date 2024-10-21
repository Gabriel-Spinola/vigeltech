import React from 'react'
import styles from '@/app/styles/aboutus.module.scss'

export default function AboutUs() {
  return (
    <section className={`px-32 pb-48 bg-redlight ${styles.aboutUsContainer}`}>
      <section
        className={`flex flex-row items-center justify-around gap-16 py-16 ${styles.aboutUs}`}
      >
        <div>
          {/* Container for the right side */}
          <p className="text-xl text-[#fff] max-w-xl">
            <h2 className="text-5xl text-[#fff]">QUEM SOMOS?</h2>
            {/* Adjusted max-width */}
            Somos uma empresa especializada em{' '}
            <span className={styles.textSpan}>
              desenvolvimento de aplicativos mobile
            </span>{' '}
            e <span className={styles.textSpan}>desktop</span>, criação de{' '}
            <span className={styles.textSpan}>sites</span> e{' '}
            <span className={styles.textSpan}>sistemas</span>, além de oferecer{' '}
            <span className={styles.textSpan}>serviços de design</span>.
            Asseguramos que cada projeto reflita a individualidade de quem o
            solicita, com performance otimizada para suas necessidades.
          </p>
        </div>

        <div className=" translate-y-10">
          {/* Container for the left side */}
          <p className="text-xl text-[#fff] max-w-xl">
            <h2 className="text-5xl text-[#fff]">NOSSA VISÃO</h2>
            {/* Adjusted max-width */}
            Transformar ideias em soluções digitais eficazes, ajudando empresas
            a criar, escalar e expandir seus produtos e serviços.
          </p>
        </div>
      </section>
    </section>
  )
}
