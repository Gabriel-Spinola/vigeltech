import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  id: number
  imageUrl: string
  text: string
}

const slides: Slide[] = [
  { id: 1, imageUrl: '/img/slide1.png', text: 'Builder Buddy' },
  { id: 2, imageUrl: '/img/slide2.png', text: 'VittoTree' },
  { id: 3, imageUrl: '/img/slide3.png', text: 'Harpya HUD' },
]

const imageDistancePercent = 10
const focusedImageSize = { width: 1050, height: 500 }
const unfocusedImagesSize = { width: 650, height: 450 }

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const getPreviousIndex = () =>
    currentIndex === 0 ? slides.length - 1 : currentIndex - 1

  const getNextIndex = () =>
    currentIndex === slides.length - 1 ? 0 : currentIndex + 1

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden flex justify-center items-center relative carousel-container">
        {/* Área clicável à esquerda */}
        <div
          className="absolute left-0 top-0 h-full w-1/4 cursor-pointer z-20 hidden lg:block"
          onClick={prevSlide}
        ></div>

        {/* Imagem à esquerda */}
        <div
          className="relative cursor-pointer hidden lg:block rounded-xl overflow-hidden"
          onClick={prevSlide}
          style={{
            transform: `translateX(${imageDistancePercent}%)`,
            zIndex: 5,
            width: `${unfocusedImagesSize.width}px`,
            height: `${unfocusedImagesSize.height}px`,
          }}
        >
          <Image
            src={slides[getPreviousIndex()].imageUrl}
            alt={`Slide ${slides[getPreviousIndex()].id}`}
            fill
            style={{ objectFit: 'cover' }}
            className={`opacity-50 backdrop-blur-sm `}
          />
        </div>

        {/* Imagem Central com Texto */}
        <div
          className="relative z-10 mx-4 flex flex-col justify-center items-center cursor-pointer rounded-xl overflow-hidden"
          onClick={nextSlide}
          style={{
            width: '100%',
            maxWidth: `${focusedImageSize.width}px`,
            height: `${focusedImageSize.height}px`,
          }}
        >
          <Image
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${slides[currentIndex].id}`}
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-auto"
          />

          <div className="absolute bottom-4 text-white text-xl font-bold bg-transparent p-2 text-reddark rounded-xl overflow-hidden">
            {slides[currentIndex].text}
          </div>
        </div>

        {/* Imagem à direita */}
        <div
          className="relative cursor-pointer hidden lg:block rounded-xl overflow-hidden"
          onClick={nextSlide}
          style={{
            transform: `translateX(-${imageDistancePercent}%)`,
            zIndex: 5,
            width: `${unfocusedImagesSize.width}px`,
            height: `${unfocusedImagesSize.height}px`,
          }}
        >
          <Image
            src={slides[getNextIndex()].imageUrl}
            alt={`Slide ${slides[getNextIndex()].id}`}
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50 backdrop-blur-sm"
          />
        </div>

        {/* Área clicável à direita */}
        <div
          className="absolute right-0 top-0 h-full w-1/4 cursor-pointer z-20 hidden lg:block"
          onClick={nextSlide}
        ></div>
      </div>

      {/* Estilizar a responsividade */}
      <style jsx>
        {`
          @media (max-width: 1200px) {
            .lg\\:block {
              display: none; /* Esconder as imagens laterais em telas pequenas */
            }

            .carousel-container {
              position: relative;
              width: 100%;
            }

            .carousel-container img {
              width: 100%; /* Ajustar a imagem central para ocupar toda a largura */
              height: auto;
            }

            .relative {
              cursor: pointer; /* Tornar a área central clicável */
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  )
}
