import React from 'react'
import { connect } from 'react-redux'
import { setFilterText, sortByAmount, sortByDate } from '../store/actions/Filters'

const ExpenseListFilters = props => {
  const inputChangeListener = e => {
    props.dispatch(setFilterText(e.target.value))
  }

  const orderBy = e => {
    const val = e.target.value
    props.dispatch(val === 'amount' ? sortByAmount() : sortByDate())
  }

  return (
    <div>
      <input type="text" value={props.filters.text} onChange={e => inputChangeListener(e)}></input>
      <select value={props.filters.sortBy} onChange={e => orderBy(e)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
