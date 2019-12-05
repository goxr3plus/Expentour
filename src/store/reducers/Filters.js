import * as ActionTypes from '../actions/ActionTypes'
import moment from 'moment'

const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  focusedItem: null
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TEXT_FILTER:
      return { ...state, text: action.text }
    case ActionTypes.SORT_BY_DATE:
      return { ...state, sortBy: 'date' }
    case ActionTypes.SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' }
    case ActionTypes.SET_START_DATE:
      return { ...state, startDate: action.startDate }
    case ActionTypes.SET_END_DATE:
      return { ...state, endDate: action.endDate }
    case ActionTypes.CALENDAR_FOCUSED_ITEM:
      return { ...state, focusedItem: action.focusedItem }
    default:
      return state
  }
}

export default filtersReducer
