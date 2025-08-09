import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    // Delete by Id
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // action.payload->[id,todo]
    editTodo(state, action) {
      return state.map((todo) => {
        if (todo.id === action.payload[0]) {
          return action.payload[1];
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
