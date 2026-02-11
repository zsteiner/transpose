'use client';
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Logo } from './Logo';
import styles from './MainNav.module.css';

const ROUTE_SPECIFIC_PARAMS = ['scale', 'chord'];

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  pathname: string;
  searchParams: URLSearchParams;
};

const NavLink = ({ href, children, pathname, searchParams }: NavLinkProps) => {
  const filtered = new URLSearchParams(searchParams);
  ROUTE_SPECIFIC_PARAMS.forEach((param) => filtered.delete(param));
  const queryString = filtered.toString();
  const fullHref = queryString ? `${href}?${queryString}` : href;

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

  return (
    <header className={styles.header}>
      <Link
        className={styles.logoLink}
        href={searchParams.size ? `/?${searchParams.toString()}` : '/'}
      >
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <NavLink href="/" pathname={pathname} searchParams={searchParams}>Notes</NavLink>
        <NavLink href="/chords" pathname={pathname} searchParams={searchParams}>Chords</NavLink>
        <NavLink href="/scales" pathname={pathname} searchParams={searchParams}>Scales</NavLink>
      </nav>
    </header>
  );
};
