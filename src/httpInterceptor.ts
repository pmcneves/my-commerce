import axios from "axios";

export default () =>
  axios.interceptors.request.use(
    (request) => {
      const newHeaders = { ...request.headers, token: "1234" };
      request = { ...request, headers: newHeaders };
      console.log(request);
      console.log(process.env.NODE_ENV)
      return request;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
