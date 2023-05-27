import {ReactElement} from "react";

const IncreaseAction = (ActionComponent: ReactElement, increaseNumber: number) => {
  const announce = (val: number) => {
    alert(`Value number is ${val}`)
  }

  return () => <ActionComponent announce={announce} inceaseNumber={increaseNumber}/>
}

export default IncreaseAction;