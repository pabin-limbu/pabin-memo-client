import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./container/Homepage";
import LoginPage from "./container/LoginPage";
import RegisterForm from "./components/RegisterForm";
import { isUserLogedIn } from "./actions/user";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/HOC/PrivateRoute";
const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.authenticate) {
      dispatch(isUserLogedIn());
    }
  }, [user.authenticate]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={HomePage}></PrivateRoute>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterForm}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
