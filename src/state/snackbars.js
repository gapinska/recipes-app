const ADD_SNACK = "snackbars/ADD_SNACK"
const REMOVE_SNACK = "snackbars/REMOVE_SNACK"

export const addSnackbar =
  (text, severity = "success", time = 3000) =>
  (dispatch, getState) => {
    const key = Date.now()
    dispatch(addSnackActionCreator(text, severity, key))
    setTimeout(() => dispatch(removeSnackActionCreator(key)), time)
  }

const addSnackActionCreator = (text, severity, key) => ({
  type: ADD_SNACK,
  text,
  severity,
  key,
})

const removeSnackActionCreator = (key) => ({
  key,
  type: REMOVE_SNACK,
})

const initialState = {
  bars: [],
}

const snackBars = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SNACK:
      return {
        ...state,
        bars: [
          {
            text: action.text,
            severity: action.severity,
            key: action.key,
          },
          ...state.bars,
        ],
      }
    case REMOVE_SNACK:
      return {
        ...state,
        bars: state.bars.filter((bar) => bar.key !== action.key),
      }
    default:
      return state
  }
}

export default snackBars
