import { createStore, combineReducers } from "redux";
const uuidv1 = require("uuid/v1");

const ADD_EXPENSE = "ADD_EXPENSE";
const REMOVE_EXPENSE = "REMOVE_EXPENSE";
const EDIT_EXPENSE = "EDIT_EXPENSE";
const SET_TEXT_FILTER = "SET_TEXT_FILTER";
const SORT_BY_DATE = "SORT_BY_DATE";
const SORT_BY_AMOUNT = "SORT_BY_AMOUNT";
const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";

//----------------------------Reducers-----------------------------------------------
//   expenses: [
//     {
//       id: "fifire",
//       description: "January Rent",
//       note: "This was the final payment for that address",
//       amount: 54500, //pennies
//       createdAt: 0
//     }
//   ]
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => {
        //matching id
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        //not matching id
        else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDAte: undefined
//   }
const filtersReducerDefaultState = {
  text: "",
  sortBy: "sortBy",
  startDate: undefined,
  enddate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//----------------------------Create Store-----------------------------------------------
const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

//----------------------------Action Methods-----------------------------------------------
const addExpense = ({
  description = "",
  note = "",
  amount = "",
  createdAt = 0
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv1(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

const editExpense = ({ id, updates } = {}) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

//----------------------------Subscribe-----------------------------------------------
store.subscribe(() => {
  console.log(store.getState());
});

//----------------------------Dispatching-----------------------------------------------
const expense1 = store.dispatch(addExpense()).expense;
const expense2 = store.dispatch(addExpense()).expense;
const expense3 = store.dispatch(addExpense()).expense;

console.log("Id : ", expense1.id);
console.log("Id : ", expense2.id);

console.log(
  "Removing expense 1:",
  store.dispatch(removeExpense({ id: expense1.id }))
);
console.log(
  "Removing expense 2:",
  store.dispatch(removeExpense({ id: expense2.id }))
);

console.log(
  "Editing expense 3:",
  store.dispatch(editExpense({ id: expense3.id, updates: { amount: 1500 } }))
);

console.log(store.getState());
