// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancer = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice,
    todoList: todosSlice,
  },
});
export default store;
