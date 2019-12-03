import * as ActionTypes from '../actions/ActionTypes'

//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDAte: undefined
//   }
const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
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
    default:
      return state
  }
}

export default filtersReducer
