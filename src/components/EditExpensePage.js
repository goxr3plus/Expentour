import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/Expenses'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = props => {
  return (
    <div>
      <Button onClick={e => props.history.goBack()}> {'<'} Back</Button>{' '}
      <Button
        variant="danger"
        onClick={e => {
          props.deleteExpense(props.match.params.id)
          props.history.push('/')
        }}
      >
        Delete
      </Button>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log('New Expense', expense)
          props.editExpense(expense.id, expense)
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

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, updates) => dispatch(editExpense({ id, updates })),
    deleteExpense: id => dispatch(removeExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
