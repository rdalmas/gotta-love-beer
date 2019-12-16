import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import * as actions from "../beers";
import { actions as a, endpoints as e } from "../../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const { REACT_APP_BEER_HOST } = process.env;
const baseUrl = REACT_APP_BEER_HOST || "http://localhost:8080";

describe("Actions - Beers", () => {
  beforeEach(() => {
    store = mockStore({});
  });
  describe("fetchBeers", () => {
    it("should create an action to fetch beers - SUCCESS", done => {
      nock(baseUrl)
        .get(`${e.BEERS}`)
        .reply(200);
      const loadingAction = { type: a.BEERS_LOADING };
      const loadedAction = { type: a.BEERS_LOADED };
      store
        .dispatch(actions.fetchBeers())
        .then(() => {
          const storeTypes = store.getActions().map(action => {
            return { type: action.type };
          });
          expect(storeTypes).toEqual(expect.arrayContaining([expect.objectContaining(loadingAction)]));
          expect(storeTypes).toEqual(expect.arrayContaining([expect.objectContaining(loadedAction)]));
          expect(storeTypes.length).toEqual(2);
          done();
        })
        .catch(() => done());
    });
    it("should create an action to fetch user Id - FAILURE", done => {
      nock(baseUrl)
        .get(`${e.BEERS}`)
        .replyWithError({
          message: "Something wrong happened...",
          code: 500
        });
      const loadingAction = { type: a.BEERS_LOADING };
      const errorAction = { type: a.BEERS_FAILED };
      store
        .dispatch(actions.fetchBeers())
        .then(() => {
          const storeTypes = store.getActions().map(action => {
            return { type: action.type };
          });
          expect(storeTypes).toEqual(expect.arrayContaining([expect.objectContaining(loadingAction)]));
          expect(storeTypes).toEqual(expect.arrayContaining([expect.objectContaining(errorAction)]));
          expect(storeTypes.length).toEqual(2);
          done();
        })
        .catch(() => done());
    });
  });
});
