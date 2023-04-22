import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile, {ProfileType} from "./components/Profile";

const listProfile: Array<ProfileType> = [
  {
    fullname: 'A',
    age: 12,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1"
  },
  {
    fullname: 'b',
    age: 12,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1"
  },
  {
    fullname: 'c',
    age: 12,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1"
  }
]
function App() {
  const [likeNumber, setLikeNumber] = useState(0);

  const changeLikeNumber = (isLike: boolean) => {
    setLikeNumber(isLike ? likeNumber + 1 : likeNumber - 1);
  }

  const listProduct = listProfile.map((item, index) => <Profile changeLike={changeLikeNumber} key={index} fullname={item.fullname} age={item.age} dob={item.dob} classValue={item.classValue} slogan={item.slogan} /> );

  return (
    <div className="App">
      <p>Tổng số like: {likeNumber}</p>
      {listProduct}
    </div>
  )
}

export default App
