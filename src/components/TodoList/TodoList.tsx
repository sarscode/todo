import React from 'react';
import classNames from 'classnames/bind';
import Todo from '../Todo/Todo';

import styles from './TodoList.module.scss';
import { ITag, ITodo } from '../../@types/todo';
import { DocumentData } from 'firebase/firestore';

const cx = classNames.bind(styles);

interface TodoListProps {
  todos: ITodo[];
  tags: ITag[];
}

function TodoList({ todos, tags }: TodoListProps) {
  const todoTags: { [id: ITag['id']]: ITag } = {};

  tags?.forEach((tag) => {
    todoTags[tag.id] = tag;
  });

  return (
    <ul className={cx(styles)}>
      {todos.map((todo) => {
        const tagsIds = todo?.tags?.map((tag: DocumentData) => {
          return todoTags[tag.id];
        });
        return (
          <Todo
            todo={todo}
            id={todo.id}
            key={todo.id}
            title={todo.title}
            description={todo.description}
            tags={tagsIds}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
