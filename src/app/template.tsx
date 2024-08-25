import { MainNav } from '@/components/MainNav';
import { TransposeNote } from '@/components/TransposeNote';
import { Container } from '@/types';

import styles from './page.module.css';

const MainAppPage = ({ children }: Container) => {
  return (
    <>
      <MainNav />
      <TransposeNote>
        <div className={styles.content}>
          {children}
        </div>
      </TransposeNote>
    </>
  );
}

export default MainAppPage;
