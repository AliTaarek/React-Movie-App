import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "0b52320f678aed44db23b519ac09ff86"
    }
});

axiosInstance.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjUyMzIwZjY3OGFlZDQ0ZGIyM2I1MTlhYzA5ZmY4NiIsInN1YiI6IjYyNWQ4MGZkNjhmZjcwMTY5ZDRlODU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c7eP4szswTg8SKiLbQKmmEJz4uL3Ra1vqHBTLCKr1f8";
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
export default axiosInstance;