import React, { createContext } from 'react';
import uuid from 'uuid/v4';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: uuid(), task: 'Clean Fishtank', completed: false },
  { id: uuid(), task: 'Wash Car', completed: true },
  { id: uuid(), task: 'Grow Beard', completed: false }
];

export const TodosContext = createContext(defaultTodos);

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
