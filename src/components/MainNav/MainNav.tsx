'use client';
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from './Logo';
import styles from './MainNav.module.css';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  pathname: string;
};

const NavLink = ({ href, children, pathname }: NavLinkProps) => {
  return (
    <Link
      className={classnames(styles.link, {
        [styles.active]: pathname === href,
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link
        className={styles.logoLink}
        href="/"
      >
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <NavLink href="/" pathname={pathname}>Notes</NavLink>
        <NavLink href="/chords" pathname={pathname}>Chords</NavLink>
        <NavLink href="/scales" pathname={pathname}>Scales</NavLink>
      </nav>
    </header>
  );
};
