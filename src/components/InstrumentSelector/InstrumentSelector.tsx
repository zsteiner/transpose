import classnames from 'classnames';
import { useState } from 'react';

import { InstrumentPicker } from './InstrumentPicker';
import styles from './InstrumentSelector.module.css';
import { InstrumentSelectorItem } from './InstrumentSelectorItem';
import { useInstrumentSelector } from './useInstrumentSelector';

export const InstrumentSelector = () => {
  const [pickerVisible, setPickerVisible] = useState<number | null>(null);


  const {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    clearSelection,
  } = useInstrumentSelector();


  return (<section className={styles.switcher}>
    <InstrumentSelectorItem
      instrument={instrument1}
      onClick={() => setPickerVisible(1)}
    />
    <div>

      {/* <Icon
      class="arrow"
      icon="arrow-right"
    /> */}
    </div>

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
