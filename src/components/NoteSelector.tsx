import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentPicker } from '@/components/InstrumentPicker';
import { Container } from '@/types';

export const NoteSelector = ({ children }: Container) => {
  return (
    <div>
      <InstrumentPicker />
      <CircleFifths />
      {children}
    </div>
  );
}
