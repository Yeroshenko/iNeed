const SET_OPEN = 'DETAILS:SET_OPEN'
const SET_ITEM = 'DETAILS:SET_ITEM'

const initialState = {
  open: false,
  item: {}
}

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN: 
      return {
        ...state,
        open: action.open 
      }
      
    case SET_ITEM: 
      return {
        ...state,
        item: action.item
      } 

    default:
      return state
  }
}

// Actions creators
export const setOpen = (open) => ({ type: SET_OPEN, open })
export const setItem = (item) => ({ type: SET_ITEM, item })
