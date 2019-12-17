import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeers } from "../actions/beers";

import { Beers } from "../components";
import Loading from "../visual-components/Loading/Loading";

export const BeerList = () => {
  // getting beers on mount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);
  const data = useSelector(state => state.beers);
  if (data.loading) {
    return (
      <Loading />
    )
  }
  return (
    <Beers beers={data.beers}/>
  )
};

export default BeerList;