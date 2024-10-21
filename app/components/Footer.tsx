'use client'

import React from 'react'
import styles from '@/app/styles/footer.module.scss'

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`flex flex-col items-center gap-32 w-full py-12 bg-black text-white text-center justify-center ${styles.footerContainer}`}
    >
      {/* LINK - https://www.octaveagency.com/ */}
      {/* LINK - https://www.jamm.co/#pricing */}
      {/* TODO - Add cool animation here */}
      <article className="flex flex-col w-full gap-8">
        <h1 className="text-5xl font-bold text-redlight">
          VAMOS CONSTRUIR ALGO JUNTOS?
        </h1>
        <p className="text-graylight text-xl">
          Contrate uma equipe de especialistas oferecendo soluções completas de
          software <br /> para impulsionar seu negócio com agilidade e
          eficiência.
        </p>

        <div className="flex flex-row gap-8 align-middle justify-center">
          <button className="w-[16vw] h-[5.5vh] shadow-lg rounded-lg shadow-reddark bg-redlight border-graylight hover:ease-in transition-all duration-100 ease-in-out hover:bg-graylight hover:border hover:border-graylight hover:text-redlight hover:scale-105">
            Marque uma call
          </button>
          <button
            className="w-[16vw] h-[5.5vh] shadow-lg shadow-reddark rounded-lg border-redlight border hover:text-redlight transition-all duration-150 hover:scale-105"
            onClick={() =>
              (window.location.href = 'mailto:vigelcontato@gmail.com')
            }
          >
            Nos mande um email
          </button>
        </div>

        {/* REVIEW - Check if looks good */}
        <div className="w-full justify-center text-center">
          <button className="text-graylight bg-blue w-[16vw] h-[5.5vh] rounded-xl shadow-lg shadow-blue/75 hover:scale-105">
            Veja nossos trabalhos aqui
          </button>
        </div>
      </article>

      <article className="flex flex-row gap-36 text-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-graylight font-bold text-2xl">Vigel</h2>
          <span>From Brasil</span>
          <span className="text-base">Tel 1: +55 (31) 9 7300-8566</span>
          <span className="text-base">Tel 2: +55 (31) 9 8865-4602</span>
          <span className="text-base">
            Email:{' '}
            <a href="mailto:vigelcontato@gmail.com">vigelcontato@gmail.com</a>
          </span>

          {/* TODO -  Social medias */}
          <div className="flex flex-row gap-6">
            <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Links</h2>
          <a href="#">Nossos serviços</a>
          <a href="#">Sobre nós</a>
          <a href="#">Nossos trabalhos</a>
          <a href="#">Contato</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Serviços</h2>
          <a href="#">Desenvolvimeto de aplicativos móveis</a>
          <a href="#">Desenvolvimento de aplicações SAAS</a>
          <a href="#">Desenvolvimento de APIs e servidores</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contato</h2>
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

            <h4>Horas de funcionamento:</h4>
            <span>Segunda - Sexta: 9:00 até 5pm</span>
          </div>
        </div>
      </article>

      <div>
        <p>
          <a href="#">Termos de condições</a>
        </p>
        <p>© 2024 Vigel </p>
      </div>
    </footer>
  )
}
