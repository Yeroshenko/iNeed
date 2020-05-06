import { todosApi } from 'api'

const SET_ALL = 'TODOS:SET_ALL'
const SET_ITEM = 'TODOS:SET_ITEM'
const DELETE_ITEM = 'TODOS:DELETE_ITEM'
const UPDATE_ITEM = 'TODOS:UPDATE_ITEM'
const SET_FEATCHING = 'TODOS:TOGGLE_FEATCHING'

const initialState = {
  todos: [],
  featching: false
}

export default function todosReducer(state = initialState, action) {
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

    case DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todoId) 
      }

    case UPDATE_ITEM: 
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === action.todoId) {
          return { ...todo, ...action.payload} 
        }
        return todo
      })
    }
    
    default:
      return state
  }
}


// Actions creators
export const setTodos = (todos) => ({ type: SET_ALL, todos })
export const setTodo = (todo) => ({ type: SET_ITEM, todo })
export const deleteTodo = (todoId) => ({ type: DELETE_ITEM, todoId })
export const updateTodo = (todoId, payload) => ({ type: UPDATE_ITEM, todoId, payload })
export const setFeatching = (featching) => ({ type: SET_FEATCHING, featching })

// Thank creators
export const getTodos = () => async (dispatch) => {
  try {
    const todos = await todosApi.getAll()

    dispatch(setTodos(todos))
  } catch(e) {}
} 

export const createTodoItem = (todo) => async (dispatch) => {
  dispatch(setFeatching(true))

  try {
    const newTodo = await todosApi.create(todo)

    dispatch(setTodo(newTodo))
  } catch(e) {}
  
  dispatch(setFeatching(false))
}

export const deleteTodoItem = (todoId) => async (dispatch) => {
  try {
    const id = await todosApi.delete(todoId)
    
    dispatch(deleteTodo(id))
  } catch(e) {}
}

export const updateTodoItem = (todoId, data) => async (dispatch) => {
  try {
    dispatch(updateTodo(todoId, data))

    await todosApi.update(todoId, data)
  } catch(e) {}
}
