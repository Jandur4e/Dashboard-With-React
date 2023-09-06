import axios from "axios";

export const axiosCall = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosCall.interceptors.request.use(
  (request) => {
    if (!request.url.endsWith("/login")) {
      const user = JSON.parse(localStorage.getItem("token"));
      if (user) {
        request.headers["Authorization"] = `Bearer ${user}`;
      }
    }
    return request;
  },
  (error) => error
);

axiosCall.interceptors.response.use(
  (response) => response,
  (error) => error
);
