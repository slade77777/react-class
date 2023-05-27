import withIncrease from "../hoc/withIncrease";
import {FC, useState} from "react";

const HoverAction:FC<{inceaseNumber: number, announce: (val: number) => void}> = ({inceaseNumber, announce}) => {
  const [amount, setAmount] = useState(0);

  function increase() {
    setAmount(amount + inceaseNumber);
  }
  return <div>
    <button onMouseOver={increase}>Tăng số lượng</button>
    <p>Số lượng hiện tại: {amount}</p>
    <button onClick={() => announce(amount)}>thông báo</button>
  </div>
}

export default HoverAction;