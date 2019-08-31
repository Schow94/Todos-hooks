import React from 'react';

import uuid from 'uuid/v4';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/ToolBar';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import { TodosProvider } from './context/todos.context';
import useTodoState from './hooks/useTodoState';

import Grid from '@material-ui/core/Grid';

export default function TodoApp() {
  // console.log(todos);

  // If you wanted, you can extract out add,remove,toggletodo, and edit
  // to their own custom hook to clean up TodoApp.js file

  //setInput & useToggle are already custom hooks that we need for our input

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vn',
        backgroundColor: '#fafafa',
        fontFamily: 'Roboto'
      }}
      elevation={0}
    >
      <Appbar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS with HOOKs</Typography>
        </Toolbar>
      </Appbar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
