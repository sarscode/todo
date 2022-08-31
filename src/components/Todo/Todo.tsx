import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Todo.module.scss';
import { Checkbox, Tag, Menu, MenuButton, MenuList, MenuListItem } from '../';
import { ITag, ITodo } from '../../@types/todo';
import useTodos from '../../hooks/useTodos';

const cx = classNames.bind(styles);

interface TodoProps extends ITodo {
  title: string;
  description: string;
  id: string;
  tags: ITag[] | null;
  done?: boolean;
  markAsDone?: () => boolean;
  todo: ITodo;
}

function Todo({ todo, tags, description, title }: TodoProps) {
  const [done, setDone] = useState(false);
  const { deleteTodo } = useTodos();

  return (
    <li className={cx('todo', { done })}>
      <div className={cx('todo-header')}>
        <h3 className={cx('todo-title')}>{title}</h3>
        <Menu>
          <MenuButton showIcon={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </MenuButton>
          <MenuList align="right">
            <MenuListItem>Edit . . .</MenuListItem>
            <MenuListItem onClick={() => deleteTodo(todo)}>Delete</MenuListItem>
          </MenuList>
        </Menu>
      </div>
      <p className={cx('description')}>{description}</p>
      <div className={cx('todo-footer')}>
        <div>
          {tags?.map((tag) => (
            <Tag id={tag.id} key={tag.id} label={tag.tagName} hideLabel />
          ))}
        </div>
        <Checkbox label="Done" onClick={() => setDone(!done)} />
      </div>
    </li>
  );
}

export default Todo;
