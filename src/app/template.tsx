import { MainNav } from '@/components/MainNav';
import { TransposeContainer } from '@/components/TransposeContainer';
import { Container } from '@/types';

import styles from './page.module.css';

const MainAppPage = ({ children }: Container) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}

export default MainAppPage;
