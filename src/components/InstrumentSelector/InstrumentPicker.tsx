import { RefObject } from 'react';

import { instruments } from '@/constants/instruments';
import { Instrument } from '@/types';

import { InstrumentPickerButton } from './InstrumentPickerButton';
import styles from './InstrumentPicker.module.css';

type InstrumentPickerProps = {
  id?: string;
  onSelect: (instrument?: Instrument) => void;
  ref: RefObject<HTMLDialogElement | null>;
};

export const InstrumentPicker = ({
  id,
  onSelect,
  ref,
}: InstrumentPickerProps) => {
  const handleSelect = (instrument: Instrument) => {
    onSelect(instrument);
  };

  return (
    <dialog
      className={styles.picker}
      id={id}
      ref={ref}
    >
      <form
        className={styles.form}
        method="dialog"
      >
        <div className={styles.container}>
          <button className={styles.close}>close</button>
          <div className={styles.list}>
            <InstrumentPickerButton instrument={instruments.piano} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.altoClarinet} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.altoSax} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.bariSax} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.baritoneHorn} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.bassClarinet} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.cello} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.clarinet} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.doubleBass} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.flute} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.guitar} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.frenchHorn} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.oboe} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.sopranoSax} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.tenorSax} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.trombone} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.trumpet} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.tuba} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.viola} onSelect={handleSelect} />
            <InstrumentPickerButton instrument={instruments.violin} onSelect={handleSelect} />
          </div>
        </div>
      </form>
    </dialog>
  );
};
