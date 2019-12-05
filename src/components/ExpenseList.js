import React from 'react'
import { Badge, Card, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import getVisibleExpenses from '../store/selectors/Expenses'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = props => (
  <Card bg="dark" variant="dark" style={{ borderRadius: '0', paddingBottom: '15px', height: '100%' }}>
    <Card.Header>
      <ExpenseListFilters></ExpenseListFilters>
    </Card.Header>
    <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px', height: '100%' }}>
      {props.expenses.length != 0 ? (
        props.expenses.map((expense, index) => {
          return (
            <ListGroup.Item key={index} style={{ background: '#343a40' }}>
              <ExpenseListItem key={index} props={props} {...expense}></ExpenseListItem>
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
