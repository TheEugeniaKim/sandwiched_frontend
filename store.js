import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import menuReducer from './reducers/menuReducer'

const reducer = combineReducers ({ menuReducer })

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store