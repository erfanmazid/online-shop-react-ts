import axios from "axios";
import Cookies from "js-cookie";
import refreshToken from "../_api/refresh-token";

const baseURL: string = "http://localhost:8000";

const httpRequest = axios.create({
  baseURL,
});

httpRequest.interceptors.request.use((config) => {
  const acceessToken = Cookies.get("accessToken");

  if (acceessToken) {
    config.headers.Authorization = `Bearer ${acceessToken}`;
  }

  return config;
});

httpRequest.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const status = error.response.status;

    const originRequest = error.config;

    const refresh = Cookies.get("refreshToken");

    if (status === 401 && refresh) {
      return refreshToken(refresh)
        .then((res) => {
          Cookies.set("accessToken", res?.data.token.accessToken);

          return httpRequest.request(originRequest);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }
  }
);

export default httpRequest;
