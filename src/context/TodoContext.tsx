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

type TodoState = ITodo[] | null;
type TodoAction =
  | { type: 'SET'; payload: ITodo[] | null }
  | { type: 'ADD' | 'EDIT' | 'DELETE'; payload: ITodo };

type TagState = ITag[] | null;
type TagAction =
  | { type: 'SET'; payload: ITag[] }
  | { type: 'EDIT'; payload: ITag };
interface ITodoContext {
  todos: TodoState;
  tags: TagState;
  loadingAll: boolean;
  dispatchTodos: Dispatch<TodoAction>;
  dispatchTags: Dispatch<TagAction>;
}

const TodoContext = createContext<ITodoContext>({
  todos: null,
  tags: null,
  loadingAll: false,
  dispatchTodos: () => null,
  dispatchTags: () => null,
});

const initialTodos: TodoState = null;

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'ADD':
      return state && [...state, action.payload];
    case 'EDIT':
      const todo =
        state?.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ) || null;
      return state && todo;
    case 'DELETE':
      const { id } = action.payload;
      const filteredTodos = state?.filter((todo) => todo.id !== id) || null;
      return filteredTodos;
    default:
      return state;
  }
}

const initialTags: TagState = null;

function tagReducer(state: TagState, action: TagAction): TagState {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'EDIT':
      const tag = state?.filter((tag) => tag.id === action.payload.id) || null;
      const edittedTag = { ...tag, ...action.payload };
      return state && [...state, edittedTag];
    default:
      return state;
  }
}

function TodoContextProvider({ children }: PropsWithChildren) {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [tags, dispatchTags] = useReducer(tagReducer, initialTags);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTodos() {
      setLoadingAll(true);
      const response = await getTodos();
      dispatchTodos({ type: 'SET', payload: response });
      setLoadingAll(false);
    }

    async function fetchTags() {
      setLoadingAll(true);
      const response = await getTags();
      dispatchTags({ type: 'SET', payload: response });
      setLoadingAll(false);
    }

    fetchTags();
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, tags, loadingAll, dispatchTodos, dispatchTags }}
    >
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
