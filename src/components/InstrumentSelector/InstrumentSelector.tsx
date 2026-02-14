import classnames from 'classnames';

import { Icon } from '../Icon';
import { useDialog } from '../useDialog';
import { useTranspose } from '../useTranspose';
import { InstrumentPicker } from './InstrumentPicker';
import styles from './InstrumentSelector.module.css';
import { InstrumentSelectorItem } from './InstrumentSelectorItem';

export const InstrumentSelector = () => {
  const {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    clearSelection,
  } = useTranspose();

  const { open: picker1Open, showModal: showPicker1, close: closePicker1 } = useDialog();
  const { open: picker2Open, showModal: showPicker2, close: closePicker2 } = useDialog();

  const handleClearInstrument2 = () => clearSelection(2);

  return (
    <section className={styles.switcher}>
      <InstrumentSelectorItem
        instrument={instrument1}
        onClick={showPicker1}
      />

      <Icon
        className={styles.arrow}
        icon="arrowRight"
      />

      <div className={styles.buttonContainer}>
        <InstrumentSelectorItem
          instrument={instrument2}
          onClick={showPicker2}
        />
        <button
          className={classnames(styles.clear, {
            [styles.clearVisible]: instrument2,
          })}
          onClick={handleClearInstrument2}
        >
          clear selection
        </button>
      </div>
      <InstrumentPicker
        onClose={closePicker1}
        onSelect={setInstrument1}
        open={picker1Open}
      />
      <InstrumentPicker
        onClose={closePicker2}
        onSelect={setInstrument2}
        open={picker2Open}
      />
    </section>
  );
};
