import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface Props {
  children: ReactElement;
}

function Protected({ children }: Props) {
  const { user } = useAuth();

  if (user) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default Protected;
