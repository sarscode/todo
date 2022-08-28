import classNames from 'classnames/bind';
import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

export type TagColors = 'one' | 'two' | 'three' | 'four';

interface TagProps {
  label: string;
  color: TagColors;
  hideLabel?: boolean;
}

function formatLabel(label: string) {
  return label.toLocaleLowerCase().split(/\s/)[0];
}

function Tag({ label, hideLabel, color }: TagProps) {
  const acceptedLabel = formatLabel(label);

  return (
    <span className={cx('tag', { hidden: hideLabel })} data-testid="tag">
      <span
        className={cx('tag-color', `tag-color-${color}`)}
        data-testid="tag-color"
      ></span>
      {!hideLabel && (
        <>
          <label
            htmlFor={acceptedLabel}
            className={cx('tag-label')}
            data-testid="tag-label"
          >
            {acceptedLabel}
          </label>
          <input
            type="checkbox"
            id={acceptedLabel}
            className={cx('tag-checkbox')}
            data-testid="tag-checkbox"
          />
        </>
      )}
    </span>
  );
}

export default Tag;
