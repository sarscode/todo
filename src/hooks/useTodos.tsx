import { useEffect, useState } from 'react';
import { ITodo, ITodoForm } from '../@types/todo';
import { useTodoContext } from '../context/TodoContext';
import { addTodo, getTags, getTodos, removeTodo } from '../services/firestore';

function useTodos() {
  const { dispatch, todos, tags } = useTodoContext();
  const [loading, setLoading] = useState<boolean>(false);

  const addNewTodo = async (todo: ITodoForm) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
    setLoading(true);
    const response = await addTodo(todo);
    if (response?.status === 'success' && response.data) {
      setLoading(false);
      console.log(response);
    }
  };

  const deleteTodo = async (todo: ITodo) => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
    setLoading(true);
    await removeTodo(todo);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      const allTodos = await getTodos();
      dispatch({ type: 'TODOS', payload: allTodos });
      setLoading(false);
    }

    async function fetchTags() {
      setLoading(true);
      const allTags = await getTags();
      dispatch({ type: 'TAGS', payload: allTags });
      setLoading(false);
    }

    fetchTags();
    fetchTodos();
  }, [dispatch]);

  return { addNewTodo, deleteTodo, todos, tags, loading };
}

export default useTodos;
