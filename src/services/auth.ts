import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser,
  onAuthStateChanged,
  NextOrObserver,
} from 'firebase/auth';
import { auth } from './app';
import { IUserLogin, IUserSignUp } from '../@types/user';

export interface User extends FirebaseUser {}

export const createAccount = async ({
  displayName,
  email,
  password,
}: IUserSignUp) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName });
    return { status: 'success', data: user };
  } catch (error) {
    const { code, message } = error as AuthError;
    return { status: 'error', message, code };
  }
};

export const signInUser = async ({ email, password }: IUserLogin) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { status: 'success', data: user };
  } catch (error) {
    console.log(error);
    const { code, message } = error as AuthError;
    return { status: 'error', code, message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { status: 'success' };
  } catch (error) {
    return error;
  }
};

export const subscribeToAuthStateChange = (
  callback: NextOrObserver<FirebaseUser | null>
) => {
  return onAuthStateChanged(auth, callback);
};

export default auth;
