import React, {useCallback, useContext, useEffect, useMemo, useReducer, useState} from "react";
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
import ChangeBackgroundButton from "../components/ChangeBackgroundButton";

// @ts-ignore
const WrappedClick = withIncrease(ClickAction, 10);
// @ts-ignore
const WrappedHover = withIncrease(HoverAction, 20);

function calculateComplex(numb: number) {
  return numb * 10
}

const initialReducer = {
  number: 0,
  backgroundColor: 'black'
}

const todoReducer = (state: any, action: {type: string, payload: any}) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return {...state, number: action.payload};
    case 'CHANGE_BACKGROUND_COLOR':
      return {...state, backgroundColor: action.payload};
    default:
      return state;
  }
};

const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  // const [number, setNumber] = useState(0);
  // const [backgroundColor, setBgColor] = useState('black');
  const [states, dispatchReducer] = useReducer(todoReducer, initialReducer);

  useEffect(() => {
    if (user?.username === '') {
      navigate('/login')
    }
  }, [user?.username]);

  useEffect(() => {
    dispatch(getProfiles());
  }, [])

  const { isOnline } = useInternetStatus();
  const calculatedNumber = useMemo(() => {
    return calculateComplex(states.number);
  }, [states.number]);

  const changeBgColor = useCallback((color: string) => {
    dispatchReducer({
      type: 'CHANGE_BACKGROUND_COLOR',
      payload: color
    })
  }, [])

  return <div style={{backgroundColor: states.backgroundColor, width: '100vw', height: '100vh'}}>
    {
      !isOnline && <h1>Trang web đang không kết nối mạng</h1>
    }
    <ChangeBackgroundButton color={'purple'} changeColor={changeBgColor} />
    <ChangeBackgroundButton color={'red'} changeColor={changeBgColor} />
    <Title title={`Xin chào ${user.username}`} />
    <Title2 title={`Xin chào ${user.username} , number is ${states.number}`} />
    <button onClick={() => dispatchReducer({
      type: 'CHANGE_NUMBER',
      payload: states.number + 1
    })}>+</button>
    <p>{calculatedNumber}</p>
    <button onClick={() => dispatchReducer({
      type: 'CHANGE_NUMBER',
      payload: states.number - 1
    })}>-</button>
    <p>
      <Link to={'/list-profile'}><a>Xem danh sách profile</a></Link>
    </p>
  </div>
}

export default HomePage
