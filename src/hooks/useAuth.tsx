import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createAccount,
  signInUser,
  signOutUser,
  subscribeToAuthStateChange,
} from '../services/auth';
import { IUserLogin, IUserSignUp } from '../@types/user';
import { useAuthContext } from '../context/AuthContext';

function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null | undefined>(null);
  const { dispatch, user } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password }: IUserLogin) => {
    setLoading(true);
    setError(null);

    const response = await signInUser({ email, password });
    setLoading(false);

    if (response.status === 'error' && response.message) {
      setError(response.code);
    } else {
      const { data } = response;
      dispatch({ type: 'LOGIN', payload: data });
      navigate('/todos', { replace: true });
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);

    const response = await signOutUser();
    dispatch({ type: 'LOGOUT' });
    navigate('/', { replace: true });
    console.log(response);
  };

  const signup = async ({ email, password, displayName }: IUserSignUp) => {
    setLoading(true);
    setError(null);
    const response = await createAccount({ displayName, email, password });
    setLoading(false);

    if (response.status === 'error' && response.message) {
      setError(response.code);
    } else {
      const { data } = response;
      dispatch({ type: 'LOGIN', payload: data });
      navigate('/todos', { replace: true });
    }
  };

  useEffect(() => {
    const unsubscribe = subscribeToAuthStateChange((currentUser) => {
      if (currentUser) {
        dispatch({ type: 'LOGIN', payload: currentUser });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return { user, loading, error, login, logout, signup };
}

export default useAuth;
