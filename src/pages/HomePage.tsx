import React, {useContext} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {UserContext} from "../App";
import {useSearchParams} from "react-router-dom";

const WrappedClick = withIncrease(ClickAction, 10);
const WrappedHover = withIncrease(HoverAction, 20);
const HomePage = () => {
  let [searchParams] = useSearchParams();
  // username in params
  searchParams.get('username');
  const userProvider = useContext(UserContext);
  return <div>
    <p>Xìn chào, {searchParams.get('name')}</p>
    <WrappedClick/>
    <WrappedHover />
  </div>
}

export default HomePage