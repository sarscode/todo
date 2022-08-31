import { DocumentData } from 'firebase/firestore';

export interface ITodo extends DocumentData {
  id: string;
}

export interface ITag extends DocumentData {
  id: string;
}

export interface ITodoForm extends ITodo {
  title: string;
  description: string;
}
