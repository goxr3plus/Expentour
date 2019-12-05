import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }, props) => (
  <div>
    <Badge variant="info">
      <Link to={`/edit/${id}`} style={{ color: 'white' }}>
        <h3>{description}</h3>
      </Link>
    </Badge>
    <p>
      <strong>Amount</strong> : {amount / 100} $
    </p>
    <p>
      <strong>Date</strong> :
      {moment(createdAt)
        .format('DD/MM/YYYY hh:mm:ss')
        .toString()}
    </p>
    {note ? (
      <p>
        <strong>Note</strong> : {note}
      </p>
    ) : null}
  </div>
)

export default ExpenseListItem
