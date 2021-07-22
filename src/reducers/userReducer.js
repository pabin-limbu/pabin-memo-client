import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  GET_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from "../constants/actionTypes";

const initState = {
  token: null,
  user: { id: "", email: "", username: "" },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      state = { ...state, authenticating: true };
      break;
    case LOGIN_USER_SUCCESS:
      console.log(action);
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        user: {
          id: action.payload.user._id,
          email: action.payload.user.username,
          username: action.payload.user.username,
        },
      };
      break;
    case GET_USER_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        user: {
          id: action.payload.user._id,
          email: action.payload.user.username,
          username: action.payload.user.username,
        },
      };
      break;

    case LOGOUT_USER_SUCCESS:
      state = initState;
  }
  return state;
};
