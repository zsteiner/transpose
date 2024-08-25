import { Container } from '@/types';

import { CircleFifths } from './CircleFifths/CircleFifths';

export const NoteSelector = ({ children }: Container) => {
  return (
    <div>
      <CircleFifths />
      {children}
    </div>
  );
}
