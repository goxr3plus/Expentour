import uuid from 'uuid'
import database from '../../firebase/firebase'

//----------------- ACTION TYPES ------------------------
export const EXPENSE_ADD = 'ADD_EXPENSE'
export const EXPENSE_REMOVE = 'REMOVE_EXPENSE'
export const EXPENSE_EDIT = 'EDIT_EXPENSE'

//----------------- ASYNCHRONOUS ACTIONS ------------------------
export const startAddExpense = (expenseData = {}) => dispatch => {
  const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData
  const expense = { description, note, amount, createdAt }

  database
    .ref('expenses')
    .push(expense)
    .then(ref => {
      addExpense({ id: ref.key, ...expense })
    })
    .catch(e => console.log('An error happened bro'))
}

//----------------- SYNCHRONOUS ACTIONS ------------------------
export const addExpense = expense => ({
  type: EXPENSE_ADD,
  expense
})

export const removeExpense = ({ id } = {}) => ({
  type: EXPENSE_REMOVE,
  id
})

export const editExpense = ({ id, updates } = {}) => ({
  type: EXPENSE_EDIT,
  id,
  updates
})
