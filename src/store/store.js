import { createStore, combineReducers } from "redux";
import expensesReducer from "./reducers/Expenses";
import filtersReducer from "./reducers/Filters";

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

export default store;
