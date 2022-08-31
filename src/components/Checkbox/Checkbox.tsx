import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  fullWidth?: boolean;
}

const Checkbox = forwardRef(
  (
    { id, fullWidth, label, ...props }: CheckboxProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <>
        <label
          htmlFor={id}
          className={cx('checkbox-label', { required: props.required })}
        >
          <input
            type="checkbox"
            id={id}
            className={cx('checkbox', { fullWidth: fullWidth })}
            ref={ref}
            {...props}
          />
          {label}
        </label>
      </>
    );
  }
);

export default Checkbox;
