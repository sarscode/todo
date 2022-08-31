import classNames from 'classnames/bind';
import { ITag } from '../../@types/todo';
import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

export type TagColors = 'one' | 'two' | 'three' | 'four';

interface TagProps extends ITag {
  id: string;
  label: string;
  hideLabel?: boolean;
  register?: Function;
}

function formatLabel(label: string) {
  return label.toLocaleLowerCase().split(/\s/)[0];
}

function Tag({ label, hideLabel, id, register }: TagProps) {
  const acceptedLabel = formatLabel(label);

  return (
    <span className={cx('tag', { hidden: hideLabel })} data-testid="tag">
      <span
        className={cx('tag-color', `tag-color-${id}`)}
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
            {...(typeof register !== 'undefined'
              ? { ...register(label) }
              : null)}
          />
        </>
      )}
    </span>
  );
}

export default Tag;
