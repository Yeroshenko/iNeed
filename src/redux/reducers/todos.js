import { todosApi } from 'api'

const SET_ALL = 'TODOS:SET_ALL'

const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL: 
      return {
        ...state,
        todos: action.todos
      }

    default:
      return state
  }
}


// Actions creators
export const setTodos = (todos) => ({ type: SET_ALL, todos })

// Thank creators
export const getTodos = () => async (dispatch) => {
  try {
    const todos = await todosApi.getAll()

    dispatch(setTodos(todos))
  } catch(e) {}
} 


export default todosReducer