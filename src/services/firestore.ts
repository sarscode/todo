import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  DocumentData,
  DocumentReference,
  Timestamp,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import { ITodo, ITodoForm } from '../@types/todo';
import { db } from './app';

export async function getTodos() {
  const q = query(collection(db, 'todos'), orderBy('createdAt'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

export async function getTags() {
  const querySnapshot = await getDocs(collection(db, 'tags'));
  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

export async function addTodo({ title, description, tags }: ITodoForm) {
  const timestampInSeconds = function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  };

  const timestampInNanoSeconds = function getTimestampInNanoSeconds() {
    return Math.floor(Date.now() / 1000 / 1000);
  };

  try {
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collection(db, 'todos'),
      {
        title,
        description,
        done: false,
        tags,
        createdAt: new Timestamp(
          timestampInSeconds(),
          timestampInNanoSeconds()
        ),
      }
    );
    return { status: 'success', data: { id: docRef.id } };
  } catch (error) {}
}

export async function removeTodo({ id }: ITodo) {
  try {
    await deleteDoc(doc(db, 'todos', id));
  } catch (error) {}
}

export function subscribeToDataBaseUpdate(resource: string, cb: Function) {
  const q = query(collection(db, resource), orderBy('createdAt'));
  return onSnapshot(q, (querySnapshot) => {
    cb(querySnapshot.docs);
  });
}
