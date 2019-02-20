import axios from "axios";

const URL = "http://localhost:8081/api/";

const API = axios.create({
  baseURL: URL
});

const req = (method, url, params = "", data = {}) => API[method](`${url}?${params}`, data);

const user = {
  add: data => req("post", "/user", "", data),
};

const room = {
  add: data => req("post", "/room", "", data),
}

export { API, user, room };