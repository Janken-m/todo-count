import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  text: string;
  done: boolean;
  entities?: any;
}

const initialState = [
  { id: "1", text: "Learn HTML", done: true },
  { id: "2", text: "Learn Javascript", done: true },
  { id: "3", text: "Learn React", done: true },
  { id: "4", text: "Learn Vuj", done: false },
  { id: "5", text: "Learn Css", done: true },
  { id: "6", text: "Learn Blender", done: false },
  { id: "7", text: "Learn React-native", done: true },
];

const slice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state: any, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    RemoveTodo: (state: any, action: PayloadAction<ITodo>) => {
      return state.filter((todo: ITodo) => todo.id !== action.payload.id);
    },
    EditTodo: (state: any, action: PayloadAction<ITodo>) => {
      state.map((todo: ITodo) => {
        if (todo.id === action.payload.id) return (todo.done = !todo.done);
      });
    },
  },
});

export const { addTodo, RemoveTodo, EditTodo } = slice.actions;

export default slice.reducer;
