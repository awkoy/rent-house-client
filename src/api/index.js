import axios from "axios";

const URL = "https://rent-house.herokuapp.com/api/";

const API = axios.create({
  baseURL: URL
});

const req = (method, url, params = "", data = {}) => API[method](`${url}?${params}`, data);

const userApi = {
  add: data => req("post", "/user", "", data),
  login: data => req("post", "/login", "", data)
};

const roomApi = {
  add: data => req("post", "/room", "", data),
  getList: () => req("get", "/room-list")
}

export { API, userApi, roomApi };