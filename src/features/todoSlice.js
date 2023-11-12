import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    completedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const removed = state.todos.find((todo) => todo.id === action.payload);
      state.completedTodos.push(removed);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeCompleted: (state, action) => {
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeEverything: (state) => {
      state.completedTodos = [];
    },
  },
});

export const { addTodo, removeTodo, removeCompleted, removeEverything } =
  todoSlice.actions;

export default todoSlice.reducer;
