import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import Header from './../components/Header'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'

const AppRouter = () => (
  // <React.StrictMode>
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/create" component={AddExpensePage} />
        <Route exact path="/edit/:id" component={EditExpensePage} />
        <Route exact path="/help" component={HelpPage} />
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  // </React.StrictMode>
)

export default AppRouter
