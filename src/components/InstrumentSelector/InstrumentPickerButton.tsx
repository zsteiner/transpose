import { InstrumentItem } from '@/components/InstrumentItem';
import { Instrument } from '@/types';

import styles from './InstrumentPicker.module.css';

type InstrumentPickerButtonProps = {
  instrument: Instrument;
  onSelect: (instrument: Instrument) => void;
};

export const InstrumentPickerButton = ({
  instrument,
  onSelect,
}: InstrumentPickerButtonProps) => (
  <button
    className={styles.button}
    onClick={() => onSelect(instrument)}
  >
    <InstrumentItem
      instrument={instrument}
      stretch
    />
  </button>
);
