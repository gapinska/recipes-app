import "./App.css"
import FullScreenCircularProgress from "./components/FullScreenCircularProgress"
import { useDispatch } from "react-redux"
import { circularProgress } from "./state/fullScreenCircularProgress"
<<<<<<< HEAD
import ScrollTop from "./components/ScrollTop"
import { BrowserRouter } from "react-router-dom"
=======
import Snackbars from "./components/Snackbars"
import { addSnackbar } from "./state/snackbars"
>>>>>>> 3124c3ba945a48bd978fda6d5d22ad28c3dbddbf

function App() {
  const { add, remove } = circularProgress
  const dispatch = useDispatch()

  window.addCircular = () => dispatch(add())
  window.removeCircular = () => dispatch(remove())
  window.addSnackbar = (text, color, time) =>
    dispatch(addSnackbar(text, color, time))

  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <FullScreenCircularProgress />
        <ScrollTop />
      </BrowserRouter>
=======
      <FullScreenCircularProgress />
      <Snackbars />
>>>>>>> 3124c3ba945a48bd978fda6d5d22ad28c3dbddbf
    </div>
  )
}

export default App
