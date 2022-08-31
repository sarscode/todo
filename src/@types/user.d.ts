import { User } from '../services/auth';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSignUp {
  email: string;
  password: string;
  displayName: string;
}

export interface IUser extends User {}
