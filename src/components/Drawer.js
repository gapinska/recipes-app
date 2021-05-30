import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import DehazeIcon from "@material-ui/icons/Dehaze"
import { useSelector, useDispatch } from "react-redux"
import { toogleDrawerStatus } from "../state/drawer"
import { useHistory, withRouter, Link, Router } from "react-router-dom"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

const SwipeableTemporaryDrawer = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const drawerStatus = useSelector(
    (state) => state.toogleDrawerStatus.drawerStatus
  )
  const dispatch = useDispatch()
  const links = [
    { title: "Add recipe", route: "/add-recipe" },
    { title: "Recipes", route: "/recipes" },
    { title: "Your recipes", route: "/your-recipes" },
  ]

  const redirect = (link) => history.push(link)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    dispatch(toogleDrawerStatus())
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
          <ListItem
            button
            key={text.title}
            onClick={() => redirect(text.route)}
          >
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {["left"].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon style={{ color: "white" }} />
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={drawerStatus}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </div>
      ))}
      <div
        onClick={() => redirect("/")}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        Chef App
      </div>
      <div
        style={{
          textTransform: "uppercase",
          fontSize: "10px",
          marginLeft: "60vw",
        }}
      >
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/change-pssword"
        >
          <div>Change password</div>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <div>Log Out</div>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(SwipeableTemporaryDrawer)
