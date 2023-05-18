import {Link, redirect, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {store} from "../redux/store";
import {login} from "../redux/actions/userAction";
import {useDispatch, useStore} from "react-redux";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useStore();
  const redirectToHomePage = () => {
    //handle logic check user
    if (username && password) {
      dispatch(login({username, password}))
      navigate(`/`)
    } else {
      alert('vui lòng nhập username hoặc password')
    }
  }

  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <p>This is login page</p>
    Username:
    <input onChange={(e) => setUsername(e.target.value)}/>
    Password:
    <input onChange={(e) => setPassword(e.target.value)} />
    <button onClick={redirectToHomePage}>Login</button>
  </div>
}

export default Login
