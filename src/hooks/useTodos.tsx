import { useState } from 'react';
import { ITodo, ITodoForm } from '../@types/todo';
import { useTodoContext } from '../context/TodoContext';
import { addTodo, removeTodo, updateTodo } from '../services/firestore';

const timestampInSeconds = () => Math.floor(Date.now() / 1000);
const timestampInNanoSeconds = () => Math.floor(Date.now() / 1000 / 1000);

function useTodos() {
  const { dispatchTodos, dispatchTags, todos, tags, loadingAll } =
    useTodoContext();
  const [loading, setLoading] = useState<boolean>(false);

  const addNewTodo = async (todo: ITodoForm) => {
    setLoading(true);
    const response = await addTodo(todo);
    if (response?.status === 'success' && response.data) {
      dispatchTodos({
        type: 'ADD',
        payload: { ...todo, id: response.data.id },
      });
      setLoading(false);
      console.log(response);
    }
  };

  const deleteTodo = (todo: ITodo) => {
    dispatchTodos({ type: 'DELETE', payload: todo });
    setLoading(true);
    removeTodo(todo);
    setLoading(false);
  };

  const editTodo = (todo: ITodo) => {
    dispatchTodos({ type: 'EDIT', payload: todo });
    setLoading(true);
    updateTodo(todo);
    setLoading(false);
  };

  return {
    addNewTodo,
    deleteTodo,
    editTodo,
    todos,
    tags,
    loading,
    loadingAll,
  };
}

export default useTodos;
