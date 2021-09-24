import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { Container } from './styles';

function useFetching(actionCreator, url) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator(url));
  }, [dispatch, actionCreator, url]);
}

export default useFetching;
