import axios from "axios";

const URL = "https://rent-house.herokuapp.com/api/";

const API = axios.create({
  baseURL: URL
});

const req = (method, url, params = "", data = {}) => API[method](`${url}?${params}`, data);

const user = {
  add: data => req("post", "/user", "", data),
};

const room = {
  add: data => req("post", "/room", "", data),
  getList: () => req("get", "/room-list")
}

export { API, user, room };