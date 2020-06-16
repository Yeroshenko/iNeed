import { listsApi } from 'api'
import { deleteTodoItems } from './todos'

const SET_FEATCHING = 'LISTS:SET_FEATCHING'
const SET_ALL = 'LISTS:SET_ALL'
const SET_ITEM = 'LISTS:SET_ITEM'
const UPDATE_ITEM = 'LIST_UPDATE_ITEM'
const DELETE_ITEM = 'LISTS:DELETE_ITEM'

const initialState = {
  lists: [],
  featching: false
}

export function listsReducer(state = initialState, action) {
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

    case UPDATE_ITEM:
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === action.listId) {
            return { ...list, ...action.payload}
          }
          return list
        })
      }

    case DELETE_ITEM:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.listId)
    }

    default:
      return state
  }
}

// Actions creators
export const setLists = (lists) => ({ type: SET_ALL, lists })
export const setFeatching = (featching) => ({ type: SET_FEATCHING, featching})
export const setList = (list) => ({ type: SET_ITEM, list })
export const updateList = (listId, payload) => ({ type: UPDATE_ITEM, listId, payload })
export const deleteList = (listId) => ({ type: DELETE_ITEM, listId })

// Thank creators
export const getLists = () => async (dispatch, getState) => {
  const uid = getState().auth.user.uid
  const lists = await listsApi.getAll(uid)

  dispatch(setLists(lists))
}

export const creteList = (listName) => async (dispatch, getState) => {
  dispatch(setFeatching(true))

  const uid = getState().auth.user.uid
  const newListItem = await listsApi.create({ title: listName, uid})

  dispatch(setList(newListItem))
  dispatch(setFeatching(false))
}

export const updateListTitle = (listId, newTitle) => async (dispatch) => {
  dispatch(setFeatching(true))

  await listsApi.update(listId, { title : newTitle })

  dispatch(updateList(listId, { title: newTitle }))
  dispatch(setFeatching(false))
}

export const deleteListItem = (listId) => async (dispatch) => {
  dispatch(setFeatching(true))

  await listsApi.delete(listId)

  dispatch(deleteList(listId))
  dispatch(deleteTodoItems(listId))
  dispatch(setFeatching(false))
}