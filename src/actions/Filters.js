//----------------- ACTION TYPES ------------------------
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
export const SORT_BY_DATE = 'SORT_BY_DATE'
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT'
export const SET_START_DATE = 'SET_START_DATE'
export const SET_END_DATE = 'SET_END_DATE'
export const CALENDAR_FOCUSED_ITEM = 'CALENDAR_FOCUSED_ITEM'

//----------------- SYNCHRONOUS ACTIONS ------------------------
export const setFilterText = text => ({
  type: SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({ type: SORT_BY_DATE })

export const sortByAmount = () => ({ type: SORT_BY_AMOUNT })

export const setFocusedItem = data => ({ type: CALENDAR_FOCUSED_ITEM, focusedItem: data })

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
})

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate
})
