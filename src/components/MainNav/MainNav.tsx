'use client'
import Link from 'next/link'

import { Logo } from './Logo';
import styles from "./nav.module.css";

export const MainNav = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <Link
          className={styles.link}
          href="/"
        >
          Notes
        </Link>
        <Link
          className={styles.link}
          href="/chords"
        >
          Chords
        </Link>
        <Link
          className={styles.link}
          href="/scales"
        >
          Scales
        </Link>
      </nav>
    </header>
  )
}
