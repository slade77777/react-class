import {useContext} from "react";
import {MenuContext} from "../App";

const Trade = ({finish}) => {
  const menuContext = useContext(MenuContext);
  const {chosenFoods} = menuContext;
  return <div>
    <p>Các món đã chọn: {chosenFoods.map(item => item.name).toString()}</p>
    <p>Tổng tiền: {chosenFoods.reduce((totalVal, item) => totalVal + item.price, 0)}</p>
    <button onClick={finish}>Thanh Toán</button>
  </div>
}

export default Trade;