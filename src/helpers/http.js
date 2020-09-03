import Axios from 'axios-observable';

export const API_URL = 'https://arcanum-catalogue.firebaseio.com/';

Axios.interceptors.request.use(
  function (config) {
    if (config.method === 'get') {
      config.params = { ...config.data };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * Make an axios request but returns an Observable instead of a Promise
 * NOTE: If the method is 'GET' the data will be converted to URL Query Params
 * @endpoint {string} Endpoint to call
 * @method {string} Method used to make the call
 * @data {Object} (Optional) Body of the request
 * @config {Object} (Optional) Aditional axios config
 */
const http = (endpoint, method, data = {}, config = {}) =>
  Axios.request({
    baseURL: API_URL,
    url: endpoint,
    method,
    data,
    headers: { 'Content-Type': 'application/json' },
    ...config,
  });

export default http;
