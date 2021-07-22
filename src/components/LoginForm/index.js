import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useDispatch } from "react-redux";
import { isUserLogedIn, loginUser } from "../../actions/user";
const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    height: "70vh",
    width: "280px",
    margin: "20px auto",
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
});

function LoginForm(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  //if user is authenticated redirect him to homepage.
  if (user.authenticate) {
    return <Redirect to={"/"} />;
  }

  const submitLoginUser = (username, password) => {
    console.log("i reached here");
    dispatch(loginUser(username, password));
  };

  return (
    <Grid>
      <Paper className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.green}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2> Sign In</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="user name"
              variant="outlined"
              placeholder="enter username"
              fullWidth
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="enter password"
              fullWidth
              required
              type="password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => {
                submitLoginUser("a", "a");
              }}
            >
              SIGN IN
            </Button>
          </form>

          <Typography>
            <Link href="#">Forgot Password</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account?
            <Link href="/register">Sign up</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
