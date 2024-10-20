import React from 'react'
import styles from '@/app/styles/team.module.scss'

export default function Team() {
  return (
    <section
      className={`bg-darkblue px-32 pb-48 flex flex-col gap-8 text-[#fff] ${styles.teamContainer}`}
    >
      <h1 className="text-5xl">
        NOSSA <span className="text-redlight">EQUIPE</span>
      </h1>
      <section className="flex gap-16">
        <div className="flex flex-col gap4">
          <h2>Vittão</h2>
        </div>
      </section>
    </section>
  )
}
