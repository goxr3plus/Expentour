import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css"; //Reset all the default browser css
import "./styles/style.scss";
import AppRouter from "./routers/AppRouter";
import ConfigureStore from "./store/Store";
import { addExpense } from "./store/actions/Expenses";
import getVisibleExpenses from "./store/selectors/Expenses";
import { setFilterText } from "./store/actions/Filters";

const store = ConfigureStore();

store.dispatch(addExpense({ description: "water" }));
store.dispatch(addExpense({ description: "gas" }));

// store.dispatch(setFilterText("water"));

console.log(
  getVisibleExpenses(store.getState().expenses, store.getState().filters)
);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
