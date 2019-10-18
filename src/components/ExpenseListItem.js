import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../playground/redux-expentour";
import { Link } from "react-router-dom";

const ExpenseListItem = (
  { dispatch, id, description, amount, createdAt },
  props
) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
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
