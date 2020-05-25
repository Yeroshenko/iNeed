import { listsApi } from 'api'

const SET_FEATCHING = 'LISTS:SET_FEATCHING'
const SET_ALL = 'LISTS:SET_ALL'
const SET_ITEM = 'LISTS:SET_ITEM'

const initialState = {
  lists: [],
  featching: false
}

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEATCHING:
      return {
        ...state,
        featching: action.featching
      }

    case SET_ALL:
      return {
        ...state,
        lists: action.lists
      }

    case SET_ITEM:
      return {
        ...state,
        lists: [...state.lists, action.list]
      }

    default:
      return state
  }
}

// Actions creators
export const setLists = (lists) => ({ type: SET_ALL, lists })
export const setFeatching = (featching) => ({ type: SET_FEATCHING, featching})
export const setList = (list) => ({ type: SET_ITEM, list })

// Thank creators
export const getLists = () => async (dispatch) => {
  const lists = await listsApi.getAll()

  dispatch(setLists(lists))
}

export const creteList = (listName) => async (dispatch) => {
  dispatch(setFeatching(true))
  const newListItem = await listsApi.create({ title: listName})

  dispatch(setList(newListItem))
  dispatch(setFeatching(false))
}