import classnames from 'classnames';

import { Icon } from '../Icon';
import { useTransposeState } from '../useTranspose/useTranspose';
import { InstrumentPicker, useModal } from './InstrumentPicker';
import styles from './InstrumentSelector.module.css';
import { InstrumentSelectorItem } from './InstrumentSelectorItem';

export const InstrumentSelector = () => {
  const {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    clearSelection,
  } = useTransposeState();

  const { ref, onOpen } = useModal();
  const { ref: refTranspose, onOpen: onOpenTranspose } = useModal();

  return (
    <section className={styles.switcher}>
      <InstrumentSelectorItem
        instrument={instrument1}
        onClick={onOpen}
      />

      <Icon
        className={styles.arrow}
        icon="arrowRight"
      />

      <div className={styles.buttonContainer}>
        <InstrumentSelectorItem
          instrument={instrument2}
          onClick={onOpenTranspose}
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
        onSelect={setInstrument1}
        ref={ref}
        selectedInstrument={instrument1}
      />
      <InstrumentPicker
        onSelect={setInstrument2}
        ref={refTranspose}
        selectedInstrument={instrument1}
      />
    </section>
  );
};
