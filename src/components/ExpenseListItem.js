import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../../playground/redux-expentour'
import { Link } from 'react-router-dom'
import { Badge, Button } from 'react-bootstrap'

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }, props) => (
  <div>
    <Badge variant="info">
      <Link to={`/edit/${id}`} style={{ color: 'white' }}>
        <h3>{description}</h3>
      </Link>
    </Badge>
    <p>
      Amount : {amount} , Date : {createdAt} , Note : {note}
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
