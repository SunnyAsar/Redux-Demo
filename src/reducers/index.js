import { combineReducers, createStore } from 'redux'
import citiesReducer from './cityReducer'

const rootReducer = combineReducers({
  Cities: citiesReducer
})


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store