import {useRef, useState} from 'react'
import './App.css'
import Profile, {ProfileType} from "./components/Profile";

const listProfile: Array<ProfileType> = [
  {
    id: 1,
    fullname: 'A',
    age: 12,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1",
  },
  {
    id: 2,
    fullname: 'b',
    age: 14,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1",
  },
  {
    id: 3,
    fullname: 'c',
    age: 16,
    dob: "1994",
    classValue: "class A",
    slogan: "sologan 1",
  }
]
function App() {
  const [listAgeLiked, setListAgeLiked] = useState(0);
  const [listProfileLiked, setListProfileLiked] = useState<Array<ProfileType>>([]);

  const changeLikeNumber = (position: number, isLike: boolean, totalAge: number) => {
    let copyListProfileLiked = [...listProfileLiked];
    const idLiked = listProfile[position].id;
    if (copyListProfileLiked.find(item => item.id === idLiked)) {
      copyListProfileLiked = copyListProfileLiked.filter(item => item.id !== idLiked)
      setListAgeLiked(listAgeLiked - totalAge)
    } else {
      copyListProfileLiked = [...copyListProfileLiked, listProfile[position]];
      setListAgeLiked(listAgeLiked + totalAge);
    }
    setListProfileLiked(copyListProfileLiked);
  }

  const changeBonusAges = (position: number) => {
    let copyListProfileLiked = [...listProfileLiked];
    const idLiked = listProfile[position].id;
    if (copyListProfileLiked.find(item => item.id === idLiked)) {
      setListAgeLiked(listAgeLiked + 1)
    }
  }

  return (
    <div className="App">
      <p>Tổng số tuổi đã like: {listAgeLiked}</p>
      {listProfile.map((item, index) => <Profile
        id={item.id}
        maxAge={listAgeLiked} position={index} setBonusAges={changeBonusAges}
        changeLike={(val: boolean, totalAge: number) => changeLikeNumber(index, val, totalAge)} key={index} fullname={item.fullname}
        age={item.age} dob={item.dob} classValue={item.classValue} slogan={item.slogan} /> )}
    </div>
  )
}

export default App
