import React from 'react'
import styles from '@/app/styles/team.module.scss'

export default function Team() {
  return (
    <section
      className={`bg-darkblue px-32 flex flex-col gap-8 text-[#fff] ${styles.teamContainer}`}
    >
      <h1 className="text-5xl">
        NOSSA <span className="text-redlight">EQUIPE</span>
      </h1>
      <section className="flex gap-16">
        <div className="flex flex-col gap4">
          <h2>Ademar</h2>
        </div>
        <div className="flex flex-col gap4">
          <h2>Spinola</h2>
        </div>
        <div className="flex flex-col gap4">
          <h2>Lucão</h2>
        </div>
      </section>
    </section>
  )
}
