import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Modal, TextArea, Tag } from '..';
import { ITag, ITodo, ITodoForm } from '../../@types/todo';

import styles from './TodoForm.module.scss';
import useTodos from '../../hooks/useTodos';

const cx = classNames.bind(styles);

interface Props {
  close: Function;
  todoTags?: ITag[] | null;
  todo?: ITodo;
}

function TodoForm({ close, todoTags, todo }: Props) {
  const { register, handleSubmit, reset } = useForm<ITodoForm>();
  const { loading, addNewTodo, tags, editTodo } = useTodos();

  const onSubmit: SubmitHandler<ITodoForm> = async (data) => {
    const { title, description, ...tagOptions } = data;
    const selectedTags = tags?.filter(
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
      reset();
    } else {
      editTodo({ ...todo, ...data });
      close();
    }
  };

  return (
    <Modal root="modal-root" onCloseModal={close} closeOnEsc>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('top-controls')}>
          <Button
            label="Cancel"
            variant="outline"
            onClick={() => close()}
            type="button"
          />
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
          {...register('title', { value: todo?.title })}
        />
        <TextArea
          label="Description"
          placeholder="add a description . . ."
          id="description"
          rows={4}
          fullWidth
          {...register('description', { value: todo?.description })}
        />
        <h3>Tags</h3>
        {tags?.map((tag) => (
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
