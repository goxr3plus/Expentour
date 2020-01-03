import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from './reducers/Expenses'
import filtersReducer from './reducers/Filters'
import thunk from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnchancers(applyMiddleware(thunk))
  )

  return store
}
