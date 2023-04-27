import {useContext, useEffect, useState} from "react";
import {MenuContext} from "../App";

const Trade = ({finish}) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const menuContext = useContext(MenuContext);
  const {chosenFoods} = menuContext;

  useEffect(() => {
    // do something
    let countdown = 10;
    const timeInterval = setInterval(() => {
      if (countdown > 0) {
        console.log(countdown);
        countdown--;
        setTimeLeft(countdown);
      } else {
        return clearInterval(timeInterval);
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    }
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      finish();
    }
  }, [timeLeft])

  return <div>
    <p>Thời gian còn lại để thanh toán: {timeLeft} giây</p>
    <p>Các món đã chọn: {chosenFoods.map(item => item.name).toString()}</p>
    <p>Tổng tiền: {chosenFoods.reduce((totalVal, item) => totalVal + item.price, 0)}</p>
    <button onClick={finish}>Thanh Toán</button>
  </div>
}

export default Trade;