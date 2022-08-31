import { useState } from 'react';
import classNames from 'classnames/bind';
import { Checkbox, Layout, Loader } from '../../components';
import Tags from '../../components/Tags/Tags';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import useTodos from '../../hooks/useTodos';

import styles from './Todos.module.scss';

const cx = classNames.bind(styles);

function Todos() {
  const [showTodoModal, setShowTodoModal] = useState(false);
  const { todos, tags, loading } = useTodos();

  return (
    <>
      {loading ? (
        <Loader variant="page" />
      ) : (
        <Layout
          main={
            <div className={cx('wrapper')}>
              {showTodoModal && tags && (
                <TodoForm close={() => setShowTodoModal(false)} tags={tags} />
              )}
              <div className={cx('sidebar')}>
                <div className={cx('sidebar-nav')}>
                  {tags && <Tags tags={tags} />}
                </div>
                {todos && todos.length > 0 && (
                  <div className={cx('done')}>
                    <Checkbox label="Hide Done Tasks" />
                  </div>
                )}
              </div>
              <main className={cx('main')}>
                <div className={cx('controls')}>
                  <span
                    className={cx('add')}
                    onClick={() => setShowTodoModal(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="24" y1="10" x2="24" y2="38" />
                      <line x1="10" y1="24" x2="38" y2="24" />
                    </svg>
                  </span>
                </div>
                {todos && tags && <TodoList todos={todos} tags={tags} />}
              </main>
            </div>
          }
        />
      )}
    </>
  );
}

export default Todos;
