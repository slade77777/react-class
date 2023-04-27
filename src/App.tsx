import './App.css'
import Menus from "./components/Menus";
import {createContext, useState} from "react";
import Trade from "./components/Trade";

export const MenuContext = createContext({
  chosenFoods: [],
  chooseFood: (val: any) => {}
})
function App() {
  const [chosenFoods , setChosenFoods] = useState([]);
  const [step, setStep] = useState(1);

  const handleChangeFood = (val: any) => {
    let copyChosenFoods = [...chosenFoods];
    const isChosen = chosenFoods.find(item => item.id === val.id);
    if (isChosen) {
      copyChosenFoods = copyChosenFoods.filter(item => item.id !== val.id)
    } else {
      copyChosenFoods = [...copyChosenFoods, val];
    }
    setChosenFoods(copyChosenFoods);
  }

  const payMenu = () => {
    setStep(2);
  }

  const finish = () => {
    setStep(1);
    setChosenFoods([]);
  }

  return (
    <MenuContext.Provider value={{chosenFoods, chooseFood: handleChangeFood}}>
      <div>
        {
          step === 1 ? <Menus payMenu={payMenu} /> : <Trade finish={finish} />
        }
      </div>
    </MenuContext.Provider>
  )
}

export default App
