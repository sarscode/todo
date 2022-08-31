import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Modal, TextArea, Tag } from '..';
import { ITag, ITodo, ITodoForm } from '../../@types/todo';

import styles from './TodoForm.module.scss';
import useTodos from '../../hooks/useTodos';

const cx = classNames.bind(styles);

interface Props {
  close: Function;
  tags: ITag[];
  todo?: ITodo;
}

function TodoForm({ close, tags, todo }: Props) {
  const { register, handleSubmit } = useForm<ITodoForm>();
  const { loading, addNewTodo } = useTodos();

  const onSubmit: SubmitHandler<ITodoForm> = async (data) => {
    const { title, description, ...tagOptions } = data;
    const selectedTags = tags.filter(
      (tag) => tagOptions[tag.tagName] && tag.id
    );

    if (!todo) {
      const response = await addNewTodo({
        id: '',
        title,
        description,
        done: false,
        tags: selectedTags,
      });
      console.log(response);
      close();
    }
  };

  return (
    <Modal root="modal-root" onCloseModal={close} closeOnEsc>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('top-controls')}>
          <Button label="Cancel" variant="outline" onClick={() => close()} />
          <Button
            label={todo ? 'Edit' : 'Add'}
            type="submit"
            loading={loading}
            disabled={loading}
          />
        </div>
        <Input
          type="text"
          placeholder="add a title . . ."
          label="Title"
          id="text"
          fullWidth
          {...(todo && { value: todo.title })}
          {...register('title')}
        />
        <TextArea
          label="Description"
          placeholder="add a description . . ."
          id="description"
          rows={4}
          fullWidth
          {...(todo && { value: todo.descripton })}
          {...register('description')}
        />
        <h3>Tags</h3>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.tagName}
            id={tag.id}
            register={register}
          />
        ))}
      </form>
    </Modal>
  );
}

export default TodoForm;
