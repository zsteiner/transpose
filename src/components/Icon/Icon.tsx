import classnames from 'classnames';

import styles from './Icon.module.css';

type IconProps = {
  icon: string;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => (
  <svg className={classnames(styles.icon, className)}>
    <use href={`#${icon}`} />
  </svg>
);
