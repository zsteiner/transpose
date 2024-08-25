import { MainNav } from '@/components/MainNav';
import { Container } from '@/types';

const MainAppPage = ({ children }: Container) => {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
}

export default MainAppPage;
