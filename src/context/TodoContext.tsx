import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { ITag, ITodo } from '../@types/todo';
import { getTodos, getTags } from '../services/firestore';

interface ITodoState {
  todos: ITodo[] | null;
  tags: ITag[] | null;
}

interface ITodoAction {
  type: 'ADD_TODO' | 'DELETE_TODO' | 'TODOS';
  payload?: ITodo | ITodo[];
}

interface ITodoBatchAction {
  type: 'TODOS';
  payload?: ITodo | ITodo[];
}

interface ITagAction {
  type: 'EDIT_TAGNAME' | 'TAGS';
  payload?: ITag | ITag[];
}

type IAction = ITodoAction | ITagAction | ITodoBatchAction;

interface ITodoContext {
  todos: ITodo[] | null;
  tags: ITag[] | null;
  loadingAll: boolean;
  dispatch: Dispatch<IAction>;
}

const initialState: ITodoState = {
  todos: null,
  tags: null,
};

const TodoContext = createContext<ITodoContext>({
  todos: null,
  tags: null,
  loadingAll: false,
  dispatch: () => ({ todos: null, tags: null }),
});

function todoReducer(state: ITodoState, action: IAction): ITodoState {
  if (action.payload && !Array.isArray(action.payload)) {
    switch (action.type) {
      case 'ADD_TODO':
        let { todos } = state;
        return todos
          ? { ...state, todos: [...todos, action.payload] }
          : { ...state, todos: [action.payload] };
      case 'DELETE_TODO':
        const { id } = action.payload;
        const filteredTodos =
          state.todos?.filter((todo) => todo.id !== id) || null;
        return { ...state, todos: filteredTodos };
      default:
        return state;
    }
  }

  if (Array.isArray(action.payload)) {
    switch (action.type) {
      case 'TODOS':
        return { ...state, todos: action.payload };
      case 'TAGS':
        return { ...state, tags: action.payload };
      default:
        return state;
    }
  }
  return state;
}

function TodoContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);

  useEffect(() => {
    console.log('useTodos is called');

    async function fetchTodos() {
      setLoadingAll(true);
      const allTodos = await getTodos();
      dispatch({ type: 'TODOS', payload: allTodos });
      setLoadingAll(false);
    }

    async function fetchTags() {
      setLoadingAll(true);
      const allTags = await getTags();
      dispatch({ type: 'TAGS', payload: allTags });
      setLoadingAll(false);
    }

    fetchTags();
    fetchTodos();
  }, [dispatch]);

  return (
    <TodoContext.Provider value={{ ...state, loadingAll, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw Error(
      'useTodoContext must be used inside within the <TodoContext.Provider>'
    );
  }
  return todoContext;
}

export default TodoContextProvider;
