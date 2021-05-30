import "./App.css"
import FullScreenCircularProgress from "./components/FullScreenCircularProgress"
import { useDispatch } from "react-redux"
import { circularProgress } from "./state/fullScreenCircularProgress"
import Snackbars from "./components/Snackbars"
import { addSnackbar } from "./state/snackbars"
import ScrollTop from "./components/ScrollTop"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  const { add, remove } = circularProgress
  const dispatch = useDispatch()

  window.addCircular = () => dispatch(add())
  window.removeCircular = () => dispatch(remove())
  window.addSnackbar = (text, color, time) =>
    dispatch(addSnackbar(text, color, time))

  return (
    <div className="App">
      <FullScreenCircularProgress />
      <BrowserRouter>
        <ScrollTop />
      </BrowserRouter>
      <Snackbars />
    </div>
  )
}

export default App
