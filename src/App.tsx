import {useRef, useState} from 'react'
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
    age: 14,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1"
  },
  {
    fullname: 'c',
    age: 16,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1"
  }
]
function App() {
  const [likeNumber, setLikeNumber] = useState(0);
  const [listAge, setListAge] = useState(listProfile.map(i => i.age));

  const maxAge = Math.max.apply(Math, listAge);
  const changeLikeNumber = (isLike: boolean) => {
    setLikeNumber(isLike ? likeNumber + 1 : likeNumber - 1);
  }

  const changeBonusAges = (position: number, age: number) => {
    const ages = [...listAge];
    ages[position] = age;
    setListAge(ages);
  }

  return (
    <div className="App">
      <p>Tổng số like: {likeNumber}</p>
      {listProfile.map((item, index) => <Profile maxAge={maxAge} position={index} setBonusAges={changeBonusAges} changeLike={changeLikeNumber} key={index} fullname={item.fullname} age={item.age} dob={item.dob} classValue={item.classValue} slogan={item.slogan} /> )}
    </div>
  )
}

export default App
