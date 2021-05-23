const ADD_CIRCULAR = "fullScreenCircularProgress/ADD_CIRCURAL"
const REMOVE_CIRCULAR = "fullScreenCircularProgress/REMOVE_CIRCULAR"

const addCircularActionCreator = () => ({
  type: ADD_CIRCULAR,
})

const removeCircularActionCreator = () => ({
  type: REMOVE_CIRCULAR,
})

export const circularProgress = {
  add: addCircularActionCreator,
  remove: removeCircularActionCreator,
}

const initialState = {
  circurals: [],
}

const fullScreenCircularProgress = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CIRCULAR:
      return {
        ...state,
        circurals: [...state.circurals, true],
      }
    case REMOVE_CIRCULAR:
      return {
        ...state,
        circurals: [],
      }
    default:
      return state
  }
}

export default fullScreenCircularProgress
