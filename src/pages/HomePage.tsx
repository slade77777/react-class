import React, {useContext, useEffect} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {store} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getProfiles} from "../redux/actions/userAction";

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
  const user = useSelector(store => store?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.username === '') {
      navigate('/login')
    }
  }, [user?.username]);

  useEffect(() => {
    dispatch(getProfiles());
  }, [])

  return <div>
    <p>Xin chào {user.username}</p>
    <Link to={'/list-profile'}><a>Xem danh sách profile</a></Link>
    {/*<WrappedClick/>*/}
    {/*<WrappedHover />*/}
  </div>
}

export default HomePage
