import React from 'react'
import { Badge, Card, ListGroup, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import getVisibleExpenses from '../store/selectors/Expenses'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListItem from './ExpenseListItem'
import numbro from 'numbro'

const ExpenseList = props => {
  const totalExpenses =
    props.expenses.length != 0 //check if array is empty
      ? props.expenses
          .map(expense => {
            return expense.amount / 100
          })
          .reduce((sum, x) => sum + x)
      : 0

  return (
    <Card bg="dark" variant="dark" style={{ borderRadius: '0', paddingBottom: '15px', height: '100%' }}>
      <Card.Header>
        <ExpenseListFilters></ExpenseListFilters>
      </Card.Header>
      <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px', height: '100%' }}>
        <Container>
          <Row>
            <Col md={12}>
              <p style={{ color: 'white', textAlign: 'center' }}>Total : {numbro(totalExpenses).format({ thousandSeparated: true })} €</p>
            </Col>
          </Row>
        </Container>
        {props.expenses.length != 0 ? (
          props.expenses.map((expense, index) => {
            return (
              <ListGroup.Item key={index} style={{ background: '#343a40', height: '100%' }}>
                <ExpenseListItem key={index} {...expense}></ExpenseListItem>
              </ListGroup.Item>
            )
          })
        ) : (
          <Badge variant="info">
            <h3>No Expenses Matching</h3>
          </Badge>
        )}
      </ListGroup>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    filters: state.filters
  }
}

//export component as default
export default //
//what component we want our component to access from store
connect(mapStateToProps)(
  //connect component to store
  ExpenseList
)
