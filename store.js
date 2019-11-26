import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import menuReducer from './reducers/menuReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({ menuReducer, userReducer })

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store