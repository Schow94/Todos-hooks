import React, { useContext } from 'react';

import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';
import TextField from '@material-ui/core/TextField';

export default function TodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);

  const handleEditSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, newTask: task });
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleEditSubmit} style={{ margin: '1rem', width: '50%' }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
