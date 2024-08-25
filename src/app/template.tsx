import { MainNav } from '@/components/MainNav';
import { TransposeContainer } from '@/components/TransposeContainer/TransposeContainer';
import { Container } from '@/types';

import styles from './page.module.css';

const MainAppPage = ({ children }: Container) => {
  return (
    <>
      <MainNav />
      <TransposeContainer>
        <div className={styles.content}>
          {children}
        </div>
      </TransposeContainer>
    </>
  );
}

export default MainAppPage;
