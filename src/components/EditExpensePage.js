import React from 'react'
import { connect } from 'react-redux'

const EditExpensePage = props => {
  return (
    <div>
      <button onClick={e => props.history.goBack()}>Back</button>
      <p> Editing the expense : {mapStateToProps.expense} </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect()(EditExpensePage)
