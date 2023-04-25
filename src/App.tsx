import {createContext, useContext, useRef, useState} from 'react'
import './App.css'
import ListProfile from "./components/ListProfile";

export const TeenagerAgeContext = createContext<{age: number, changeAge: (val: number) => void}>({age: 0, changeAge: () => {}})

function App() {
  const [teenagerAge, setTeenagerAge] = useState(18)

  return (
    <TeenagerAgeContext.Provider value={{age: teenagerAge, changeAge: setTeenagerAge}}>
      <div className="App">
        <ListProfile />
      </div>
    </TeenagerAgeContext.Provider>
  )
}

export default App
