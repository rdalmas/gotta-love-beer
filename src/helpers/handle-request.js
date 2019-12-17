import axios from "axios";
import qs from "qs";

import { BEER_HOST } from "../constants";

const axiosInstance = axios.create({
  baseURL: BEER_HOST,
  paramsSerializer: params => qs.stringify(params, { skipNulls: true })
});

export async function get(apiEndpoint, urlParams) {
  return axiosInstance.get(apiEndpoint, { params: urlParams });
}

export async function post(apiEndpoint, payload) {
  return axiosInstance.post(apiEndpoint, payload);
}

export async function put(apiEndpoint, payload) {
  return axiosInstance.put(apiEndpoint, payload);
}

export async function deleteFn(apiEndpoint, urlParams) {
  return axiosInstance.delete(apiEndpoint, { params: urlParams });
}