import { handleActions } from "redux-actions";

import { actions as a } from "../constants";

const defaultState = {
  beers: [],
  loading: false,
  error: ""
};

const beers = handleActions(
  {
    [a.BEERS_LOADING]: state => ({
      ...state,
      loading: true
    }),
    [a.BEERS_LOADED]: (state, action) => ({
      ...state,
      loading: false,
      beers: action.payload.data
    }),
    [a.BEERS_FAILED]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.message
    })
  },
  defaultState
);

export default beers;