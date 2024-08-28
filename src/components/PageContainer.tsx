import { Container } from '@/types';

import styles from './PageContainer.module.css';

export const PageContainer = ({ children }: Container) => (
  <div className={styles.container}>
    {children}
  </div>
);
