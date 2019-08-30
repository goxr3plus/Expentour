import * as ActionTypes from "./ActionTypes";
import uuid from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: ActionTypes.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: ActionTypes.REMOVE_EXPENSE,
  id
});

export const editExpense = ({ id, updates } = {}) => ({
  type: ActionTypes.EDIT_EXPENSE,
  id,
  updates
});
