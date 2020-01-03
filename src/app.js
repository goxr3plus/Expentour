import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css' //Reset all the default browser css
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { getAllExpenses } from './actions/Expenses'
import ConfigureStore from './store/store'
import './styles/style.scss'
import './firebase/firebase'

const store = ConfigureStore()

store.dispatch(getAllExpenses())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
