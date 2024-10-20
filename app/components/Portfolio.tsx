import React from 'react'
import Carousel from './Carousel'
import styles from '../styles/carousel.module.scss'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <section
      className={`px-32 pt-16 flex flex-col gap-16 ${styles.carouselContainer}`}
    >
      <h1 className="text-5xl text-graydark text-center">
        ALGUNS <span className="text-redlight">PROJETOS</span> NOSSOS:
      </h1>
      <Carousel />
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl text-center text-graydark">Nossos clientes:</h2>
        <aside className="flex gap-16 items-center justify-center">
          <a
            className="w-32 h-32 relative rounded-full overflow-hidden drop-shadow opacity-75 hover:scale-105 hover:opacity-100"
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
            className="w-32 h-32 relative rounded-full overflow-hidden bg-darkblue drop-shadow opacity-75 hover:scale-105 hover:opacity-100"
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
            className="w-32 h-32 relative rounded-full overflow-hidden drop-shadow opacity-75 hover:scale-105 hover:opacity-100"
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
