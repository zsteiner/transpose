import { MainNav } from '@/components/MainNav';
import { TransposeNote } from '@/components/TransposeNote';
import { Container } from '@/types';

const MainAppPage = ({ children }: Container) => {
  return (
    <>
      <MainNav />
      <TransposeNote>
        {children}
      </TransposeNote>
    </>
  );
}

export default MainAppPage;
