import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { findByLabelText } from "@testing-library/dom"
import { useSelector, useDispatch } from "react-redux"

const styles = {
  div: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(36, 41, 41, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circular: { color: "#ffff33" },
}

export default function FullScreenCircularProgress() {
  const circulars = useSelector(
    (state) => state.fullScreenCircularProgress.circurals
  )

  return circulars.length ? (
    <div style={styles.div}>
      <CircularProgress size={100} />
    </div>
  ) : null
}
