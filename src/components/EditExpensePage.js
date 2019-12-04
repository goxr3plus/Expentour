import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../store/actions/Expenses'
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

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: id => dispatch(removeExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
