import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../store/selectors/Expenses'
import { Card, ListGroup } from 'react-bootstrap'

const ExpenseList = props => (
  <Card style={{ marginLeft: '1%', width: '98%' }}>
    <Card.Header>
      <p> Expenses Filter : {props.filters.text} </p>
    </Card.Header>
    <ListGroup>
      {props.expenses.map((expense, index) => {
        return (
          <ListGroup.Item>
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
