import axios from "axios";
import LoginForm from "../components/LoginForm";
// const urls = "https://memo-pabin-limbu.herokuapp.com/posts";
// const urlUser = "https://memo-pabin-limbu.herokuapp.com/register";
// const urlGetUser = "https://memo-pabin-limbu.herokuapp.com/user";
// const urlUserLogin = "https://memo-pabin-limbu.herokuapp.com/login";
// const urlUserLogout = "https://memo-pabin-limbu.herokuapp.com/logout";



const urls = "http://localhost:5000/posts";
const urlUser = "http://localhost:5000/register";
const urlGetUser = "http://localhost:5000/user";
const urlUserLogin = "http://localhost:5000/login";
const urlUserLogout = "http://localhost:5000/logout";

export const fetchPosts = () => axios.get(urls);
export const createPost = (newPost) => axios.post(urls, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${urls}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urls}/${id}`);
export const likePost = (id) => axios.patch(`${urls}/${id}/likepost`);
export const registerUser = (userData) =>
  axios({
    method: "post",
    url: urlUser,
    data: {
      username: userData.userName,
      email: userData.email,
      password: userData.password,
      gender: userData.gender,
      termAgreed: userData.conditionAccepted,
    },
    withCredentials: true,
  });
export const getUser = () =>
  axios({
    method: "get",
    url: urlGetUser,
    withCredentials: true,
  });

export const loginUser = (username, password) => {
  return axios({
    method: "post",
    url: urlUserLogin,
    data: {
      username: username,
      password: password,
    },
    withCredentials: true,
  });
};
export const logOut = () => {
  return axios({
    method: "get",
    url: urlUserLogout,
    withCredentials: true,
  });
};
