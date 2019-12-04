import { createStore, combineReducers } from 'redux'
import expensesReducer from './reducers/Expenses'
import filtersReducer from './reducers/Filters'

export default () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
