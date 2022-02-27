// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, prioriry: "Medium" },
//   { id: 2, name: "Lear Redux", completed: true, prioriry: "High" },
//   { id: 3, name: "Learn Java", completed: false, prioriry: "Low" },
// ];
// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/tonggleTodoStatus": {
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     }
//     default:
//       return state;
//   }
// };

// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false, prioriry: "Medium" },
    { id: 2, name: "Lear Redux", completed: true, prioriry: "High" },
    { id: 3, name: "Learn Java", completed: false, prioriry: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    tonggleTodoStatus: (state, action) => {
      const currentTodo = state.filter((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export const { addTodo, tonggleTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
