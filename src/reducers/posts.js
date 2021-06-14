import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  console.log({ action: action.type });
  //post bhanekai state ho.
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
      break;
    case CREATE:
      return [...posts, action.payload];
      break;
    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      break;

    case DELETE:
      console.log("id", action.payload.id);
      return posts.filter((post) => post._id !== action.payload.id);
      break;
    default:
      return posts;
      break;
  }
};
