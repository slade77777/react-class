import React, {useContext, useEffect} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {store} from "../redux/store";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// @ts-ignore
const WrappedClick = withIncrease(ClickAction, 10);
// @ts-ignore
const WrappedHover = withIncrease(HoverAction, 20);
const HomePage = () => {
  const navigate = useNavigate();
  // get store data
  // console.log(store.getState());
  // get store value by key
  // @ts-ignore
  const user = useSelector(state => state?.user);

  useEffect(() => {
    if (user?.username === '') {
      navigate('/login')
    }
  }, [user?.username])

  return <div>
    <p>Xin chào {user.username}</p>
    <WrappedClick/>
    <WrappedHover />
  </div>
}

export default HomePage
