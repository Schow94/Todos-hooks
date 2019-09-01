import React, { useReducer, createContext } from 'react';
import uuid from 'uuid/v4';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: uuid(), task: 'Clean Fishtank', completed: false },
  { id: uuid(), task: 'Wash Car', completed: true },
  { id: uuid(), task: 'Grow Beard', completed: false }
];

export const TodosContext = createContext(defaultTodos);

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
