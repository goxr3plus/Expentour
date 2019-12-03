import React from 'react'
import { connect } from 'react-redux'
import { setFilterText, sortByAmount, sortByDate } from '../store/actions/Filters'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const ExpenseListFilters = props => {
  const inputChangeListener = e => {
    props.dispatch(setFilterText(e.target.value))
  }

  const orderBy = e => {
    const val = e.target.value
    props.dispatch(val === 'amount' ? sortByAmount() : sortByDate())
  }

  return (
    <Container>
      <Row>
        <Col>
          <input type="text" value={props.filters.text} onChange={e => inputChangeListener(e)}></input>
        </Col>
        <Col>
          <Dropdown value={props.filters.sortBy} onChange={e => orderBy(e)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Date</Dropdown.Item>
              <Dropdown.Item href="#">Amount</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
