export const actions = {
  BEERS_LOADING: "BEERS_LOADING",
  BEERS_LOADED: "BEERS_LOADED",
  BEERS_FAILED: "BEERS_FAILED"
};

export const BEER_HOST = "https://api.punkapi.com/v2";

export const endpoints = {
  BEERS: "/beers"
};

export default {
  actions,
  endpoints,
  BEER_HOST
};