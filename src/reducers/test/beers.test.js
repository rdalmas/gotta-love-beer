import { actions as a } from "../../constants";
import reducer from "../beers";

const initialState = {
  beers: [],
  loading: false,
  error: ""
};

describe("Reducers - Beers", () => {
  describe("Initial State", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });
  describe("BEERS", () => {
    it("should handle BEERS_LOADING", () => {
      expect(
        reducer([], {
          type: a.BEERS_LOADING
        })
      ).toEqual({
        loading: true
      });
    });
    it("should handle BEERS_LOADED", () => {
      expect(
        reducer(
          { beers: [] },
          {
            type: a.BEERS_LOADED,
            payload: { data: [{ id: 1, name: "Porter" }, { id: 2, name: "Helles" }] }
          }
        )
      ).toEqual({
        beers: [{ id: 1, name: "Porter" }, { id: 2, name: "Helles" }],
        loading: false
      });
    });
    it("should handle BEERS_FAILED", () => {
      const errorMessage = "Beers endpoint failure";
      expect(
        reducer([], {
          type: a.BEERS_FAILED,
          payload: { message: errorMessage }
        })
      ).toEqual({
        loading: false,
        error: errorMessage
      });
    });
  });
});
