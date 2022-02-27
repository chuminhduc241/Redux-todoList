import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/TodoList/todosSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
