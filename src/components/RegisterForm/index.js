import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/user";
import { getPosts } from "../../actions/posts";
import axios from "axios";
import {
  Grid,
  Paper,
  makeStyles,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  Link,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  paperStyle: { padding: "30px 20px", width: 300, margin: "20px auto" },
  headerStyle: { margin: "10px 0px" },
  avatarStyle: { backgroundColor: blue[500] },
});

function RegisterForm(props) {
  const [registerUsername, setRegisterusername] = useState("");
  const [registerUserPassword, setRegisteruserPassword] = useState();
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("female");
  const [conditionAccepted, setCondiionAccpted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const register = () => {
    console.log("register clicked");
    dispatch(registerUser({ registerUsername, registerUserPassword }));
  };

  const login = async () => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        username: loginUserName,
        password: loginPassword,
      },
      withCredentials: true,
    });
    if (res.status == 200) {
      //props.history.push("/");
      console.log(res);
    }
  };

  const getUser = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/user",
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
  };

  const getPost = () => {
    dispatch(getPosts());
  };
  const ultimateTest = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/",
    }).then((res) => {
      console.log(res);
    });
  };

  const submitForm = (e) => {
    console.log("submi form");
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    console.log(userName, email, password, gender, conditionAccepted);
    console.log("register clicked");
    dispatch(
      registerUser({ userName, email, password, gender, conditionAccepted })
    );
  };
  return (
    <div>
      <Grid>
        <Paper elevation={20} className={classes.paperStyle}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <PersonOutlinedIcon></PersonOutlinedIcon>
            </Avatar>
            <h1 className={classes.headerStyle}>Sign up</h1>
            <Typography variant="caption">
              Fill all fields to create your account
            </Typography>
          </Grid>
          <form onSubmit={submitForm}>
            <TextField
              error={usernameError}
              fullWidth
              label={usernameError ? "please enter valid username" : "username"}
              placeholder="enter name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              label="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              label="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <TextField
              error={passwordError}
              fullWidth
              label={
                passwordError ? "password did not matched" : "confirm password"
              }
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></TextField>

            <FormControl
              fullWidth
              component="fieldset"
              style={{ marginTop: "10px" }}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAccept"
                  checked={conditionAccepted}
                  onChange={() => setCondiionAccpted(!conditionAccepted)}
                />
              }
              label="I accept the terms and conditions"
            />
            <Grid align="center">
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
              <br />
              <Link href="/login">login</Link>
            </Grid>
          </form>
        </Paper>
      </Grid>

      {/* <div>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setRegisterusername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setRegisteruserPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div> */}
      {/* <div>
        <h1>Login User</h1>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setloginUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div> */}
      {/* <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        <button onClick={ultimateTest}>ULTI TEST</button>
      </div> */}
    </div>
  );
}

export default RegisterForm;
