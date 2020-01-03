import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/Expenses'
import numbro from 'numbro'

const ExpenseListItem = props => {
  const { id, description, amount, note, createdAt } = props
  const amountFormated = numbro(amount / 100).format({ thousandSeparated: true })

  return (
    <Card bg="dark" style={{ height: '100%' }}>
      <Card.Header>
        <Link to={`/edit/${id}`} style={{ color: '#dc3545' }}>
          <strong>{description}</strong>
        </Link>
      </Card.Header>
      <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px', height: '100%', color: 'white' }}>
        <p>
          <strong>Amount</strong>: {amountFormated}€ <strong>Date</strong>:{' '}
          {moment(createdAt)
            .format('DD/MM/YYYY')
            .toString()}
        </p>
        {note ? (
          <p>
            <strong>Notes</strong>: {note}
          </p>
        ) : null}
        <div>
          <Button
            variant="danger"
            onClick={e => {
              props.deleteExpense(id)
              props.history.push('/')
            }}
          >
            Delete
          </Button>
          <Button
            style={{ marginLeft: '5px' }}
            variant="info"
            onClick={e => {
              props.history.push(`/edit/${id}`)
            }}
          >
            Edit
          </Button>
        </div>
      </ListGroup>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: id => dispatch(removeExpense({ id }))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ExpenseListItem))
