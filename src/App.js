import "./App.css"
import FullScreenCircularProgress from "./components/FullScreenCircularProgress"
import { useDispatch } from "react-redux"
import { circularProgress } from "./state/fullScreenCircularProgress"
import ScrollTop from "./components/ScrollTop"
import { BrowserRouter } from "react-router-dom"

function App() {
  const { add, remove } = circularProgress
  const dispatch = useDispatch()

  window.addCircular = () => dispatch(add())
  window.removeCircular = () => dispatch(remove())
  return (
    <div className="App">
      <BrowserRouter>
        <FullScreenCircularProgress />
        <ScrollTop />
      </BrowserRouter>
    </div>
  )
}

export default App
