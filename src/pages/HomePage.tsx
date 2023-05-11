import React, {useContext} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {UserContext} from "../App";

const WrappedClick = withIncrease(ClickAction, 10);
const WrappedHover = withIncrease(HoverAction, 20);
const HomePage = () => {
  const userProvider = useContext(UserContext);
  return <div>
    <p>Xìn chào, {userProvider.user}</p>
    <WrappedClick/>
    <WrappedHover />
  </div>
}

export default HomePage