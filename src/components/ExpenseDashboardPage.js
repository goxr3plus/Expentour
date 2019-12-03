import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = props => (
  <div>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage
