import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@material-ui/core";

import useStyles from "./styles";
import logo from "../../images/memories.png";
import { logoutUser } from "../../actions/user";
function Header(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOutUserSubmit = () => {
    console.log("logging out user");
    dispatch(logoutUser());
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img
            className={classes.image}
            src={logo}
            alt="logo"
            height="60"
          ></img>
          <Typography variant="h6" className={classes.title}>
            Pabin - Memo
          </Typography>
          {user.authenticate ? (
            <Button
              color="inherit"
              onClick={(e) => {
                logOutUserSubmit();
              }}
            >
              Logout
            </Button>
          ) : (
            <Button href="/login" color="inherit" onClick={(e) => {}}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
