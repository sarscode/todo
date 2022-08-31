import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import { IUser } from '../@types/user';

interface IUserState {
  user: IUser | null;
}

interface IAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: IUser;
}

interface IAuthContext {
  user: IUser | null;
  dispatch: Dispatch<IAction>;
}

const initialState: IUserState = { user: null };

const AuthContext = createContext<IAuthContext>({
  user: null,
  dispatch: () => ({
    user: null,
  }),
});

function authReducer(state: IUserState, action: IAction): IUserState {
  // console.log('authReducer called');
  switch (action.type) {
    case 'LOGIN':
      return action?.payload
        ? { ...state, user: action?.payload }
        : { ...state, user: null };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw Error(
      'useAuthContext must be used inside within the <AuthContext.Provider>'
    );
  }

  return authContext;
}

export default AuthContextProvider;
