import { MainNav } from '@/components/MainNav';
import { NoteSelector } from '@/components/NoteSelector';
import { Container } from '@/types';

const MainAppPage = ({ children }: Container) => {
  return (
    <>
      <MainNav />
      <NoteSelector>
        {children}
      </NoteSelector>
    </>
  );
}

export default MainAppPage;
