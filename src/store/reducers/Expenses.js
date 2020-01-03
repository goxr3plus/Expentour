import * as ActionTypes from '../actions/Expenses'

//   expenses: [
//     {
//       id: "fifire",
//       description: "January Rent",
//       note: "This was the final payment for that address",
//       amount: 54500, //pennies
//       createdAt: 0
//     }
//   ]
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  const type = action.type
  switch (type) {
    case ActionTypes.EXPENSE_ADD:
      return [...state, action.expense]
    case ActionTypes.EXPENSE_REMOVE:
      return state.filter(({ id }) => id !== action.id)
    case ActionTypes.EXPENSE_EDIT:
      return state.map(expense => {
        //matching id
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        //not matching id
        else {
          return expense
        }
      })
    default:
      return state
  }
}

export default expensesReducer
