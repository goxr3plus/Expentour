import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css' //Reset all the default browser css
import './styles/style.scss'
import AppRouter from './routers/AppRouter'
import ConfigureStore from './store/Store'
import { addExpense } from './store/actions/Expenses'
import getVisibleExpenses from './store/selectors/Expenses'
import { setFilterText, sortByAmount } from './store/actions/Filters'
import { Provider } from 'react-redux'

const store = ConfigureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent bill', amount: 109500 }))
store.dispatch(sortByAmount())
// store.dispatch(setFilterText("water"));

// setTimeout(() => {
//   store.dispatch(setFilterText("gas"));
// }, 2000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );

ReactDOM.render(jsx, document.getElementById('app'))
