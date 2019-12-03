import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
      error: ''
    }
  }

  //----------------------- METHODS---------------------------------------

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onTextAreaChange = e => {
    // i just left the other so you can see an alternative solution
    e.persist()
    this.setState(() => ({ note: e.target.value }))
  }

  onAmountChange = e => {
    const amount = e.target.value

    //https://regex101.com
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please Provide description and amount !'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      console.log('Submitted!')
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.description
      })
    }
  }
  //----------------------- METHODS---------------------------------------

  render() {
    return (
      <Container>
        <Row>
          <Col>{this.state.error && <Alert variant="danger">{this.state.error}</Alert>}</Col>
        </Row>
        <Form>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={e => this.onDescriptionChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" value={this.state.note} onChange={e => this.onTextAreaChange(e)} />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter Description" value={this.state.amount} onChange={e => this.onAmountChange(e)} />
          </Form.Group>
          <Form.Group controlId="datePicker">
            <Form.Label>Date Created</Form.Label>
            <br></br>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={({ focused }) => this.onFocusChange({ focused })}
              numberOfMonths={1}
              isOutsideRange={() => false}
              id="123456"
            ></SingleDatePicker>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
