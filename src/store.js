import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import fullScreenCircularProgress from "./state/fullScreenCircularProgress"
<<<<<<< HEAD
import toogleDrawerStatus from "./state/drawer"

const reducer = combineReducers({
  fullScreenCircularProgress,
  toogleDrawerStatus,
=======
import snackbars from "./state/snackbars"

const reducer = combineReducers({
  fullScreenCircularProgress,
  snackbars,
>>>>>>> 3124c3ba945a48bd978fda6d5d22ad28c3dbddbf
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
