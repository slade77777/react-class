import {Link, redirect, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../App";

const Login = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate();
  const userProvider = useContext(UserContext);
  const redirectToHomePage = () => {
    //handle logic check user
    if (username) {
      userProvider.setUser(username);
      navigate(`/?username=${username}`)
    } else {
      alert('vui lòng nhập username')
    }
  }

  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <p>This is login page</p>
    Username:
    <input onChange={(e) => setUsername(e.target.value)}/>
    Password:
    <input />
    <button onClick={redirectToHomePage}>Login</button>
  </div>
}

export default Login