import React, {useContext, useEffect, useState} from "react";
import ClickAction from "../components/ClickAction";
import HoverAction from "../components/HoverAction";
import withIncrease from "../hoc/withIncrease";
import {RootState, store} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getProfiles} from "../redux/slice/userSlice";
import {useInternetStatus} from "../hooks/useInternetStatus";
import Title from "../components/Title";
import Title2 from "../components/Title2";

// @ts-ignore
const WrappedClick = withIncrease(ClickAction, 10);
// @ts-ignore
const WrappedHover = withIncrease(HoverAction, 20);
const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const [randomNumber, setNumber] = useState(0);
  useEffect(() => {
    if (user?.username === '') {
      navigate('/login')
    }
  }, [user?.username]);

  useEffect(() => {
    dispatch(getProfiles());
  }, [])

  console.log(randomNumber);
  const { isOnline } = useInternetStatus();
  return <div>
    {
      !isOnline && <h1>Trang web đang không kết nối mạng</h1>
    }
    <Title title={`Xin chào ${user.username}`} />
    <Title2 title={`Xin chào ${user.username} , number is ${randomNumber}`} />
    <button onClick={() => setNumber(randomNumber + 1)}>+</button>
    <p>{randomNumber}</p>
    <button onClick={() => setNumber(randomNumber - 1)}>-</button>
    <Link to={'/list-profile'}><a>Xem danh sách profile</a></Link>
  </div>
}

export default HomePage
