import axios from "axios";
import qs from "qs";

const { REACT_APP_HOST_PRODUCTION, NODE_ENV } = process.env;

const axiosInstance = axios.create({
  baseURL: NODE_ENV === "production" ? REACT_APP_HOST_PRODUCTION : "http://localhost:3000",
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params, { skipNulls: true })
});

export async function get(apiEndpoint, urlParams) {
  return axiosInstance.get(`/${apiEndpoint}`, { params: urlParams });
}

export async function post(apiEndpoint, payload) {
  return axiosInstance.post(`/${apiEndpoint}`, payload);
}

export async function put(apiEndpoint, payload) {
  return axiosInstance.put(`/${apiEndpoint}`, payload);
}

export async function deleteFn(apiEndpoint, urlParams) {
  return axiosInstance.delete(`/${apiEndpoint}`, { params: urlParams });
}