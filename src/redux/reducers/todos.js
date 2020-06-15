import { todosApi } from 'api'

const SET_ALL = 'TODOS:SET_ALL'
const SET_ITEM = 'TODOS:SET_ITEM'
const DELETE_ITEM = 'TODOS:DELETE_ITEM'
const DELETE_ITEMS = 'TODOS:DELETE_ITEMS'
const UPDATE_ITEM = 'TODOS:UPDATE_ITEM'
const SET_FEATCHING = 'TODOS:SET_FEATCHING'

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

    case DELETE_ITEMS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.listId !== action.listId)
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
export const deleteTodos = (listId) => ({ type: DELETE_ITEMS, listId })
export const updateTodo = (todoId, payload) => ({ type: UPDATE_ITEM, todoId, payload })
export const setFeatching = (featching) => ({ type: SET_FEATCHING, featching })

// Thank creators
export const getTodos = () => async (dispatch) => {
  const todos = await todosApi.getAll()

  dispatch(setTodos(todos))
}

export const createTodoItem = (todo) => async (dispatch) => {
  dispatch(setFeatching(true))

  const newTodo = await todosApi.create(todo)
  dispatch(setTodo(newTodo))

  dispatch(setFeatching(false))
}

export const updateTodoItem = (todoId, data) => async (dispatch) => {
  dispatch(updateTodo(todoId, data))

  await todosApi.update(todoId, data)
}

export const deleteTodoItem = (todoId) => async (dispatch) => {
  dispatch(deleteTodo(todoId))

  await todosApi.delete(todoId)
}

export const deleteTodoItems = (listId) => async (dispatch, getState) => {
  dispatch(setFeatching(true))
  const todos = getState().todos.todos.filter(todo => todo.listId === listId)

  if (todos.length > 0) {
    todos.map(todo => dispatch(deleteTodoItem(todo.id)))
  }
  dispatch(deleteTodos(listId))
  dispatch(setFeatching(false))
}