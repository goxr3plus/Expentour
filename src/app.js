import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css' //Reset all the default browser css
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { addExpense } from './store/actions/Expenses'
import { sortByAmount } from './store/actions/Filters'
import ConfigureStore from './store/store'
import './styles/style.scss'
import './firebase/firebase'

const store = ConfigureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, note: 'LALA' }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent bill', amount: 109500 }))
store.dispatch(addExpense({ description: 'House rent', amount: 1029500 }))
store.dispatch(sortByAmount())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
