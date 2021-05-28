const TOOGLE_DRAWER_STATUS = "drawer/TOOGLE_DRAWER_STATUS"

export const toogleDrawerStatus = () => ({
  type: TOOGLE_DRAWER_STATUS,
})

const initialState = {
  drawerStatus: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_DRAWER_STATUS:
      return {
        ...state,
        drawerStatus: !state.drawerStatus,
      }
    default:
      return state
  }
}
