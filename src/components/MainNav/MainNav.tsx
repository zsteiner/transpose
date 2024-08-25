import Link from 'next/link'

import styles from "./page.module.css";
import Logo from './transpose-logo.svg';

export const MainNav = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <Link
          className={styles.link}
          href="/"
        >Notes</Link>
        <Link
          className={styles.link}
          href="/chords"
        >Chords</Link>
        <Link
          className={styles.link}
          href="/scales"
        >Scales</Link>
      </nav>
    </header>
  )
}
