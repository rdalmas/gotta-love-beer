import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeers } from "../actions/beers";

import Beers from "../components/Beers/Beers";

export const BeerList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);
  const data = useSelector(state => state.beers);
  return (
    <Beers beers={data.beers}/>
  )
};

export default BeerList;