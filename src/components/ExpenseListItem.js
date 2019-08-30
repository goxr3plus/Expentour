import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../playground/redux-expentour";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      Amount : {amount} , Date : {createdAt}
    </p>
    <button
      onClick={e => {
        dispatch(removeExpense({ id }));
      }}
    >
      REMOVE
    </button>
  </div>
);

export default connect()(ExpenseListItem);
