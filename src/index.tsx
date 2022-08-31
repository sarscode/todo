import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import TodoContextProvider from './context/TodoContext';
import { Home, Login, Signup } from './pages';
import Protected from './pages/Protected/Protected';
import Todos from './pages/Todos/Todos';
import reportWebVitals from './reportWebVitals';
import './sass/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/todos"
            element={
              <Protected>
                <TodoContextProvider>
                  <Todos />
                </TodoContextProvider>
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
