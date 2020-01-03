import uuid from 'uuid'

//----------------- ACTION TYPES ------------------------
export const EXPENSE_ADD = 'ADD_EXPENSE'
export const EXPENSE_REMOVE = 'REMOVE_EXPENSE'
export const EXPENSE_EDIT = 'EDIT_EXPENSE'

//----------------- SYNCHRONOUS ACTIONS ------------------------
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: EXPENSE_ADD,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
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
