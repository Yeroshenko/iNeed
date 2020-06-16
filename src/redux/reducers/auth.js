import { authApi } from 'api'
import { auth, facebookProvider, googleProvider, githubProvider } from 'firabase-config'

const SET_LOADING = 'AUTH:SET_LOADING'
const SET_USER = 'AUTH:SET_USER'
const SET_USER_INFO = 'AUTH:SET_USER_INFO'
const SET_ERROR = 'AUTH:SET_ERROR'

const initialState = {
  isLoading: false,
  hasError: false,
  user: null
}

export function authReducer(state = initialState, action) {
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

    case SET_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userInfo
        }
      }

    default:
      return state
  }
}

// Actions creators
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading })
export const setError = (hasError) => ({ type: SET_ERROR, hasError })
export const setUser = (user) => ({ type: SET_USER, user })
export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })


// Thank creators
export const checkAuth = () => async (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const { email, displayName, uid, photoURL } = user
      dispatch(setUser({ email, displayName, uid, photoURL }))
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

export const facebookLogin = () => authApi.loginUsingProvider(facebookProvider)
export const googleLogin = () => authApi.loginUsingProvider(googleProvider)
export const githubLogin = () => authApi.loginUsingProvider(githubProvider)

export const logout = () => async () => await authApi.logout()

export const register = (email, password) => async (dispatch) => {
  dispatch(setError(false))
  dispatch(setLoading(true))

  const res = await authApi.register(email, password)

  if (res.code) dispatch(setError(true))

  dispatch(setLoading(false))
}

export const clearError = () => (dispatch) => dispatch(setError(false))

export const updateUserInfo = (newInfo) => async (dispatch) => {
  await authApi.updateUser(newInfo)
  dispatch(setUserInfo(newInfo))
}
