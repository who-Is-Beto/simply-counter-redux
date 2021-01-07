import { combineReducers } from 'redux'
import isLoggedReducer from './isLogged'
import counterReducer from './counter'

const allReducers = combineReducers({
  counterReducer,
  isLoggedReducer,
})

export default allReducers