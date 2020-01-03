import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/Expenses'

class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit}></ExpenseForm>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ startAddExpense: expense => dispatch(startAddExpense(expense)) })

export default connect(null, mapDispatchToProps)(AddExpensePage)
