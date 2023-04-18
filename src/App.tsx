import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {
        listProfile.map((item, index) => <Profile key={index} fullname={item.fullname} age={item.age} dob={item.dob} classValue={item.classValue} slogan={item.slogan} /> )
      }
    </div>
  )
}

export default App
