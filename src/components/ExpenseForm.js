import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false
  };

  //----------------------- METHODS---------------------------------------

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onTextAreaChange = e => {
    // i just left the other so you can see an alternative solution
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    //https://regex101.com
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  //----------------------- METHODS---------------------------------------

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={e => this.onDescriptionChange(e)}
          ></input>
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={e => this.onAmountChange(e)}
          ></input>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => this.onFocusChange({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="123456"
          ></SingleDatePicker>
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={e => this.onTextAreaChange(e)}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
