'use client';
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Logo } from './Logo';
import styles from './MainNav.module.css';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  pathname: string;
  searchParams: string;
};

const NavLink = ({ href, children, pathname, searchParams }: NavLinkProps) => {
  const fullHref = searchParams ? `${href}?${searchParams}` : href;

  return (
    <Link
      className={classnames(styles.link, {
        [styles.active]: pathname === href,
      })}
      href={fullHref}
    >
      {children}
    </Link>
  );
};

export const MainNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  return (
    <header className={styles.header}>
      <Link
        className={styles.logoLink}
        href={searchParamsString ? `/?${searchParamsString}` : '/'}
      >
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <NavLink href="/" pathname={pathname} searchParams={searchParamsString}>Notes</NavLink>
        <NavLink href="/chords" pathname={pathname} searchParams={searchParamsString}>Chords</NavLink>
        <NavLink href="/scales" pathname={pathname} searchParams={searchParamsString}>Scales</NavLink>
      </nav>
    </header>
  );
};
