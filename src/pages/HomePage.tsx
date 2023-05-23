import React, {useContext, useEffect} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {RootState, store} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getProfiles} from "../redux/slice/userSlice";

// @ts-ignore
const WrappedClick = withIncrease(ClickAction, 10);
// @ts-ignore
const WrappedHover = withIncrease(HoverAction, 20);
const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
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
  </div>
}

export default HomePage
