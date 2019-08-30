import { createStore, combineReducers } from "redux";
import uuid from "uuid";

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
  sortBy: "",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };
    case SORT_BY_DATE:
      return { ...state, sortBy: "date" };
    case SORT_BY_AMOUNT:
      return { ...state, sortBy: "amount" };
    case SET_START_DATE:
      return { ...state, startDate: action.startDate };
    case SET_END_DATE:
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

//----------------------------Create Store-----------------------------------------------
const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

//----------------------------Subscribe-----------------------------------------------
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);
});

unsubscribe();
//----------------------------Actions-----------------------------------------------

export const addExpense = ({
  description = "",
  note = "",
  amount = "",
  createdAt = 0
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = ({ id, updates } = {}) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

const setFilterText = text => ({
  type: SET_TEXT_FILTER,
  text
});

const sortByDate = () => ({ type: SORT_BY_DATE });

const sortByAmount = () => ({ type: SORT_BY_AMOUNT });

const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
});

const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//----------------------------Dispatching-----------------------------------------------

// console.log("-------Adding expenses : ");

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1002 })
).expense;
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 100, createdAt: -1000 })
).expense;
const expense3 = store.dispatch(
  addExpense({ description: "Prostitutes", amount: 1500, createdAt: 550 })
).expense;

// console.log("Id : ", expense1.id);
// console.log("Id : ", expense2.id);

// console.log("-------Removing expense 1:");
// store.dispatch(removeExpense({ id: expense1.id }));

// console.log("-------Removing expense 2:");
// store.dispatch(removeExpense({ id: expense2.id }));

// console.log("-------Editing expense 3:");
// store.dispatch(editExpense({ id: expense3.id, updates: { amount: 1500 } }));

//////

// console.log("-------Editing TextFilter-------");
store.dispatch(setFilterText(""));

store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(500));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));

// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );
