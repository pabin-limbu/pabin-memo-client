import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  
  return (
    <Route
      {...rest}
      component={(props) => {
        if (user.authenticate) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
