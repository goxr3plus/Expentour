import * as ActionTypes from './ActionTypes'

export const setFilterText = text => ({
  type: ActionTypes.SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({ type: ActionTypes.SORT_BY_DATE })

export const sortByAmount = () => ({ type: ActionTypes.SORT_BY_AMOUNT })

export const setFocusedItem = data => ({ type: ActionTypes.CALENDAR_FOCUSED_ITEM, data })

export const setStartDate = startDate => ({
  type: ActionTypes.SET_START_DATE,
  startDate
})

export const setEndDate = endDate => ({
  type: ActionTypes.SET_END_DATE,
  endDate
})
