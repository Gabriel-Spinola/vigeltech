'use client'

import './style.css'
import styles from '@/app/styles/main.module.scss'
// import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <>
      <Header />
      <main className={`flex-1 relative pb-16 bg-white w-full ${styles.main}`}>
        <Services />
        <AboutUs />
        <Portfolio />
        {/* <Team /> */}
      </main>
      <Footer />
    </>
  )
}
