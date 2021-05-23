import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import fullScreenCircularProgress from "./state/fullScreenCircularProgress"
import snackbars from "./state/snackbars"

const reducer = combineReducers({
  fullScreenCircularProgress,
  snackbars,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
