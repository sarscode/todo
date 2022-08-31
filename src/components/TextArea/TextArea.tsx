import { forwardRef, LegacyRef, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './TextArea.module.scss';

const cx = classNames.bind(styles);

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  fullWidth?: boolean;
  error?: string;
}

const TextArea = forwardRef(
  (
    { label, id, fullWidth, error, rows, ...props }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    return (
      <>
        <label
          htmlFor={id}
          className={cx('textarea-label', { required: props.required })}
        >
          {label}
        </label>
        <textarea
          id={id}
          className={cx('textarea', { fw: fullWidth, error: error })}
          ref={ref}
          rows={rows}
          {...props}
        />
        {error && <small className={cx('textarea-error')}>{error}</small>}
      </>
    );
  }
);

export default TextArea;
