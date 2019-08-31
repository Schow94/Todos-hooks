import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          type="text"
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
