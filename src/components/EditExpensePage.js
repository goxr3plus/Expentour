import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { Button } from 'react-bootstrap'
import { editExpense } from '../store/actions/Expenses'

const EditExpensePage = props => {
  return (
    <div>
      <Button onClick={e => props.history.goBack()}> {'<'} Back</Button>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log('New Expense', expense)
          props.dispatch(editExpense({ id: expense.id, updates: expense }))
          props.history.push('/')
        }}
      ></ExpenseForm>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)
