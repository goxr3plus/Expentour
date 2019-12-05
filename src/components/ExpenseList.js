import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../store/selectors/Expenses'
import { Card, ListGroup, Form } from 'react-bootstrap'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseList = props => (
  <Card bg="dark" variant="dark" style={{ borderRadius: '0', paddingBottom: '15px' }}>
    <Card.Header>
      <ExpenseListFilters></ExpenseListFilters>
    </Card.Header>
    <ListGroup style={{ marginLeft: '1%', width: '98%', marginTop: '15px' }}>
      {props.expenses.map((expense, index) => {
        return (
          <ListGroup.Item key={index}>
            <ExpenseListItem key={index} props={props} {...expense}></ExpenseListItem>
          </ListGroup.Item>
        )
      })}
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
