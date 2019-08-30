import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../store/selectors/Expenses";

const ExpenseList = props => (
  <div>
    <h1> -- Expense List -- </h1>
    <p> + Filter : {props.filters.text} + </p>
    {props.expenses.map(expense => {
      return <ExpenseListItem {...expense} key={expense.id}></ExpenseListItem>;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses,state.filters),
    filters: state.filters
  };
};

//export component as default
export default //
//what component we want our component to access from store
connect(mapStateToProps)(
  //connect component to store
  ExpenseList
);
