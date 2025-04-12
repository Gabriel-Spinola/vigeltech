import React from 'react'
import Image from 'next/image'
import styles from "@/app/styles/header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <a href='./' >
        <div className={styles.logoContainer}>
          <Image
            src="/img/logo.png"
            alt="Logo"
            fill={true}
          />
        </div>
      </a>
    </header >
  )
}
