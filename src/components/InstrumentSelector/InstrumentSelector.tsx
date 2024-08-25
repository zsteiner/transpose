import classnames from 'classnames';
import { useState } from 'react';

import { Icon } from '../Icon';
import { useTransposeState } from '../useTranspose/useTranspose';
import { InstrumentPicker } from './InstrumentPicker';
import styles from './InstrumentSelector.module.css';
import { InstrumentSelectorItem } from './InstrumentSelectorItem';

export const InstrumentSelector = () => {
  const [pickerVisible, setPickerVisible] = useState<number | null>(null);


  const {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    clearSelection,
  } = useTransposeState();


  return (<section className={styles.switcher}>
    <InstrumentSelectorItem
      instrument={instrument1}
      onClick={() => setPickerVisible(1)}
    />

    <Icon
      className={styles.arrow}
      icon="arrowRight"
    />

    <div className={styles.buttonContainer}>
      <InstrumentSelectorItem
        instrument={instrument2}
        onClick={() => setPickerVisible(2)}
      />
      <button
        className={classnames(styles.clear, {
          [styles.clearVisible]: instrument2,
        })}
        onClick={() => clearSelection(2)}
      >
        clear selection
      </button>
    </div>
    <InstrumentPicker
      isOpen={pickerVisible === 1}
      onClose={() => setPickerVisible(null)}
      onSelect={setInstrument1}
      selectedInstrument={instrument1}
    />
    <InstrumentPicker
      isOpen={pickerVisible === 2}
      onClose={() => setPickerVisible(null)}
      onSelect={setInstrument2}
      selectedInstrument={instrument1}
    />
  </section >)
}
