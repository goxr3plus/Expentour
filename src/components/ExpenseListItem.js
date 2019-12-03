import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../../playground/redux-expentour'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }, props) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      Amount : {amount} , Date : {createdAt}
    </p>
    <Button
      onClick={e => {
        dispatch(removeExpense({ id }))
      }}
    >
      Remove
    </Button>
  </div>
)

export default connect()(ExpenseListItem)
