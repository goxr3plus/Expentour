import React from 'react'
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setFilterText, sortByAmount, sortByDate } from '../store/actions/Filters'

const ExpenseListFilters = props => {
  const inputChangeListener = e => {
    props.dispatch(setFilterText(e.target.value))
    props.history.push('/')
  }

  const orderBy = e => {
    console.log(e)
    props.dispatch(value === 'amount' ? sortByAmount() : sortByDate())
  }

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup>
            <FormControl
              type="text"
              value={props.filters.text}
              placeholder="Search Bills"
              className="mr-sm-2"
              onChange={e => inputChangeListener(e)}
            />
            <InputGroup.Append>
              <Button
                variant="danger"
                onClick={e => {
                  props.dispatch(setFilterText(''))
                }}
              >
                X
              </Button>
            </InputGroup.Append>
          </InputGroup>
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

export default withRouter(connect(mapStateToProps)(ExpenseListFilters))
