import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { listsReducer, todosReducer, detailsReducer, authReducer, storageReducer } from './reducers'

const rootReducer = combineReducers({
  lists: listsReducer,
  todos: todosReducer,
  details: detailsReducer,
  auth: authReducer,
  storage: storageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store