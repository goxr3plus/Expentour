import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "./../store/actions/Expenses";

const AddExpensePage = props => (
  <div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    ></ExpenseForm>
  </div>
);

export default connect()(AddExpensePage);
