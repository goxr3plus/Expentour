import React from 'react'
import { Button, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCalendarFocused, setEndDate, setFilterText, setStartDate, sortByAmount, sortByDate } from '../store/actions/Filters'

const ExpenseListFilters = props => {
  console.log(props.filters.sortBy)

  const inputChangeListener = e => {
    props.dispatch(setFilterText(e.target.value))
    props.history.push('/')
  }

  const orderBy = e => {
    console.log(e)
    props.dispatch(e === 'Amount' ? sortByAmount() : sortByDate())
  }

  const setCalendarFocus = focused => {
    props.dispatch(setCalendarFocused(focused))
  }

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate))
    props.dispatch(setEndDate(endDate))
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
        <Col>
          <Dropdown value={props.filters.orderBy} onSelect={orderBy}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Order By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Date" active={props.filters.sortBy === 'date'}>
                Date
              </Dropdown.Item>
              <Dropdown.Item eventKey="Amount" active={props.filters.sortBy === 'amount'}>
                Amount
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <DateRangePicker
          startDate={props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={onDatesChange}
          focusedInput={props.filters.calendarFocused}
          onFocusChange={setCalendarFocus}
        />
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
