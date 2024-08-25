'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentPicker } from '@/components/InstrumentPicker';
import { Container } from '@/types';

export const NoteSelector = ({ children }: Container) => {
  const handleSelectInstrument = (iconName: string) => {
    console.log(iconName);
  }

  const handleClose = () => {
    console.log('close');
  }

  return (
    <div>
      <InstrumentPicker onClose={handleClose} onSelectInstrument={handleSelectInstrument} />
      <CircleFifths />
      {children}
    </div>
  );
}
