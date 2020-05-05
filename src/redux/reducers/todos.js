import { todosApi } from 'api'

const SET_ALL = 'TODOS:SET_ALL'
const SET_ITEM = 'TODOS:SET_ITEM'
const SET_FEATCHING = 'TODOS:TOGGLE_FEATCHING'

const initialState = {
  todos: [],
  featching: false
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATCHING:
      return {
        ...state,
        featching: action.featching
      }

    case SET_ALL:
      return {
        ...state,
        todos: action.todos
      }

    case SET_ITEM:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }

    default:
      return state
  }
}


// Actions creators
export const setTodos = (todos) => ({ type: SET_ALL, todos })
export const setTodo = (todo) => ({ type: SET_ITEM, todo })
export const setFeatching = (featching) => ({ type: SET_FEATCHING, featching })

// Thank creators
export const getTodos = () => async (dispatch) => {
  try {
    const todos = await todosApi.getAll()

    dispatch(setTodos(todos))
  } catch(e) {}
} 

export const createTodo = (todo) => async (dispatch) => {
  dispatch(setFeatching(true))

  try {
    const newTodo = await todosApi.create(todo)

    dispatch(setTodo(newTodo))
  } catch(e) {}
  
  dispatch(setFeatching(false))
}

export default todosReducer