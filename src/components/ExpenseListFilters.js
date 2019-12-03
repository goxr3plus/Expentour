import React from 'react'
import { connect } from 'react-redux'
import { setFilterText, sortByAmount, sortByDate } from '../store/actions/Filters'
import { Container, Row, Col, Dropdown, FormControl } from 'react-bootstrap'

const ExpenseListFilters = props => {
  const inputChangeListener = e => {
    props.dispatch(setFilterText(e.target.value))
  }

  const orderBy = e => {
    console.log(e)
    props.dispatch(value === 'amount' ? sortByAmount() : sortByDate())
  }

  return (
    <Container>
      <Row>
        <Col>
          <FormControl
            type="text"
            value={props.filters.text}
            placeholder="Search Bills"
            className="mr-sm-2"
            onChange={e => inputChangeListener(e)}
          />
        </Col>
        {/* <Col>
          <Dropdown value={props.filters.orderBy} onSelect={orderBy}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Order By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Date</Dropdown.Item>
              <Dropdown.Item href="#">Amount</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col> */}
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
