import axios, { AxiosRequestConfig } from "axios";

export default (): number =>
  axios.interceptors.request.use(
    (request: AxiosRequestConfig) => {
      const newHeaders = { ...request.headers, token: "1234" };
      request = { ...request, headers: newHeaders };
      console.log(typeof request);
      console.log(process.env.NODE_ENV);
      return request;
    },
    (error) => {
      console.log(typeof error);
      return Promise.reject(error);
    }
  );
