import { authApi } from 'api'
import { auth } from 'firabase-config'

const SET_LOADING = 'AUTH:SET_LOADING'
const SET_USER = 'AUTH:SET_USER'
const SET_ERROR = 'AUTH:SET_ERROR'

const initialState = {
  isLoading: false,
  hasError: false,
  user: null
}

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case SET_ERROR:
      return {
        ...state,
        hasError: action.hasError
      }

    case SET_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}

// Actions creators
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading })
export const setError = (hasError) => ({ type: SET_ERROR, hasError })
export const setUser = (user) => ({ type: SET_USER, user })


// Thank creators
export const checkAuth = () => async (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const { email, uid, photoURL } = user
      dispatch(setUser({ email, uid, photoURL }))
    } else {
      dispatch(setUser(false))
    }
  })
}

export const login = (email, password) => async (dispatch) => {
  dispatch(setError(false))
  dispatch(setLoading(true))

  const res = await authApi.login(email, password)

  if (res.code) dispatch(setError(true))

  dispatch(setLoading(false))
}

export const logout = () => async (dispatch) => {
  await authApi.logout()
}

export const register = (email, password) => async (dispatch) => {
  dispatch(setError(false))
  dispatch(setLoading(true))

  const res = await authApi.register(email, password)

  if (res.code) dispatch(setError(true))

  dispatch(setLoading(false))

}

export const clearError = () => (dispatch) => dispatch(setError(false))