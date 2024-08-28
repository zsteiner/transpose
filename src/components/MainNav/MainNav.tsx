'use client'
import classnames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from './Logo';
import styles from "./MainNav.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const MainNav = () => {
  const pathname = usePathname();

  const NavLink = ({ href, children }: NavLinkProps) => {
    return (
      <Link
        className={classnames(styles.link, {
          [styles.active]: pathname === href,
        })}
        href={href}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <NavLink

          href="/"
        >
          Notes
        </NavLink>
        <NavLink
          href="/chords"
        >
          Chords
        </NavLink>
        <NavLink
          href="/scales"
        >
          Scales
        </NavLink>
      </nav>
    </header>
  )
}
