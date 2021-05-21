import "./App.css"
import FullScreenCircularProgress from "./components/FullScreenCircularProgress"
import { useDispatch } from "react-redux"
import { circularProgress } from "./state/fullScreenCircularProgress"

function App() {
  const { add, remove } = circularProgress
  const dispatch = useDispatch()

  window.addCircular = () => dispatch(add())
  window.removeCircular = () => dispatch(remove())
  return (
    <div className="App">
      <FullScreenCircularProgress />
    </div>
  )
}

export default App
