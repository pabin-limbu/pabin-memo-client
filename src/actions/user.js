import * as api from "../api";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "../constants/actionTypes";

//action creators
export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userData);
    //  dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    //  dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (username, password) => {
  return async (dispatch) => {
    console.log("i am login action");

    try {
      console.log(username, password);
      dispatch({ type: LOGIN_USER_REQUEST });

      const res = await api.loginUser(username, password);
      if (res.status == 200) {
        const { user } = res.data;
        dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } });
      } else {
        dispatch({ type: LOGIN_USER_FILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/**check user loggedin status */
export const isUserLogedIn = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER_REQUEST });
      const res = await api.getUser();
      if (res.status == 200) {
        const { user } = res.data;
        dispatch({ type: GET_USER_SUCCESS, payload: { user } });
      } else {
        console.log("user not authenticated");
        dispatch({ type: GET_USER_FAILURE });
      }
    } catch (error) {
      console.log("error caught");
      console.log(error);
    }
  };
};

/**logout User */
export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT_USER_REQUEST });
      const result = await api.logOut();
      if (result.status == 200) {
        dispatch({ type: LOGOUT_USER_SUCCESS });
        console.log("logout success");
      } else {
        console.log("logout failure");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
