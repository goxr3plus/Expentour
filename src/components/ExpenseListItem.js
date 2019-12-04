import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
  </div>
)

export default ExpenseListItem
