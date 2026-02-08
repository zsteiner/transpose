import './globals.css';

import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import { IconSet } from '@/components/Icon';
import { MainNav } from '@/components/MainNav';
import { TransposeContainer } from '@/components/TransposeContainer';

import styles from './page.module.css';

const fontFamily = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Transpose',
  description: 'Tools for transposing instruments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <div className={styles.container}>
          <IconSet />
          <Suspense fallback={null}>
            <MainNav />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <TransposeContainer>{children}</TransposeContainer>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
