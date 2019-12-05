import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }, props) => (
  <Card bg="dark" style={{ height: '100%' }}>
    <Card.Header>
      <Link to={`/edit/${id}`} style={{ color: '#dc3545' }}>
        <strong>{description}</strong>
      </Link>
    </Card.Header>
    <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px', height: '100%', color: 'white' }}>
      <p>
        <strong>Amount</strong> : {amount / 100}€ <strong>Date</strong> :{' '}
        {moment(createdAt)
          .format('DD/MM/YYYY')
          .toString()}
      </p>
      {note ? (
        <p>
          <strong>Notes</strong> : {note}
        </p>
      ) : null}
    </ListGroup>
  </Card>
)

export default ExpenseListItem
