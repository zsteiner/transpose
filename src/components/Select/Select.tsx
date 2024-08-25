import classnames from 'classnames';

import styles from './Select.module.css';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      <select
        className={classnames(styles.select, styles.input)}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select >
    </div >
  )
}
