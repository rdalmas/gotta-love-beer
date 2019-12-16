import { createAction } from "redux-actions";

import { get } from "../helpers/handle-request";
import { actions as a, endpoints as e } from "../constants";

const beersLoading = createAction(a.BEERS_LOADING);
const beersLoaded = createAction(a.BEERS_LOADED, data => data);
const beersFailed = createAction(a.BEERS_FAILED, error => error);
export const fetchBeers = () => async dispatch => {
  dispatch(beersLoading());
  try {
    const data = await get(e.BEERS);
    dispatch(beersLoaded(data));
  } catch (err) {
    dispatch(beersFailed(err));
  }
};

export default { fetchBeers };