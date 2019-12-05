import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }, props) => (
  <Card bg="warning">
    <Card.Header>
      <Link to={`/edit/${id}`} style={{ color: 'white' }}>
        <strong>{description}</strong>
      </Link>
    </Card.Header>
    <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px', height: '100%' }}>
      <p>
        <strong>Amount</strong> : {amount / 100} $
      </p>
      <p>
        <strong>Date</strong> :
        {moment(createdAt)
          .format('DD/MM/YYYY')
          .toString()}
      </p>
      {note ? (
        <p>
          <strong>Note</strong> : {note}
        </p>
      ) : null}
    </ListGroup>
  </Card>
)

export default ExpenseListItem
