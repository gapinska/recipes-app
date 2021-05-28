import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import { makeStyles } from "@material-ui/core/styles"
import MuiAlert from "@material-ui/lab/Alert"
import { useSelector, useDispatch } from "react-redux"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function Snackbars() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const bars = useSelector((state) => state.snackbars.bars)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <div>
      {bars.map((message, index) => (
        <Snackbar
          style={{ bottom: 30 + 70 * index }}
          key={message.key}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={message.severity}>
            {message.text}
          </Alert>
        </Snackbar>
      ))}
    </div>
  )
}
