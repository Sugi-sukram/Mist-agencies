/**
 :: Request network request tool.
    More detailed api documentation: https://github.com/umijs/umi-request.
    Adapted from ant-design-pro
 */
import { notification } from "antd";
import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";
import Cookies from "universal-cookie";
const cookieStore = new Cookies();

let axiosPrivate = axios.create();
const codeMessage: Record<number, string> = {
  200: "The server successfully returned the requested data.",
  201: "The new or modified data was successful.",
  202: "A request has entered the background queue (asynchronous task).",
  204: "The deletion of data was successful.",
  400: "There was an error in the request and the server did not take action to create or modify the data.",
  401: "The user does not have permissions (token, user name, password error).",
  403: "Users are authorized, but access is prohibited.",
  404: "Requests are made for records that do not exist and the server does not operate.",
  406: "The format of the request is not available.",
  409: "The request could not be processed because of conflict in the current state.",
  410: "The requested resource is permanently deleted and is no longer available.",
  422: "When an object is created, a validation error occurs.",
  500: "There is an error with the server, please check the server.",
  502: "Gateway error.",
  503: "The service is not available, the server is temporarily overloaded or maintained.",
  504: "The gateway timed out.",
};

// Request interceptor
axiosPrivate.interceptors.request.use((config) => {
  const token = cookieStore.get("token");
  config.headers.Authorization = `Bearer ${token ?? ""}`;
  return config;
});

// Response interceptor
axiosPrivate.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      let data = error.response.data as any;
      let statusCode = error.response.status;
      if (statusCode === 401 && window.location.pathname !== "/") {
        localStorage.clear();
        window.location.href = "/admin/login";
      } else {
        notification.error({
          message: data.message || codeMessage[statusCode],
        });
      }
    } else if (error.request) {
      notification.error({
        message: "Unable to handle request",
        description:
          "Check your internet or check with administrator to solve the issue",
      });
    } else {
      notification.error({
        message: "Network anomaly",
        description: error.message,
      });
    }
  }
);

export default axiosPrivate;
