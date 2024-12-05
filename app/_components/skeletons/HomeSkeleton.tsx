import React from 'react'
import styles from '../../styles/header.module.scss'

export default function HeaderSkeleton() {
  return (
    <>
      <header
        className={`min-h-[111vh] bg-office-work bg-bottom bg-no-repeat bg-cover px-32 py-16 ${styles.header}`}
        style={{ backgroundAttachment: 'fixed' }}
      >
        <section
          className={`flex flex-row gap-24 items-center ${styles.headerContent}`}
        >
          <div className={`${styles.iconPlaceholder}`} />{' '}
          {/* Placeholder for SmileyIcon */}
          <section className="flex flex-col gap-24 font-bold">
            <nav className="flex flex-row gap-32 text-lightblue font-bold w-full justify-center text-2xl">
              <div className="h-8 w-32 bg-gray-200 rounded-md" />{' '}
              {/* Placeholder for links */}
              <div className="h-8 w-32 bg-gray-200 rounded-md" />
              <div className="h-8 w-32 bg-gray-200 rounded-md" />
            </nav>
            <h1
              className={`${styles.headerTitle} drop-shadow-lg text-[#fff] text-8xl text-center`}
            >
              <div className="h-12 w-64 bg-gray-200 rounded-md mx-auto" />{' '}
              {/* Placeholder for title */}
            </h1>
          </section>
          <div className={`${styles.iconPlaceholder}`} />{' '}
          {/* Placeholder for SmileyIcon */}
        </section>
        <div className={`${styles.overlay}`}></div>
      </header>
    </>
  )
}
