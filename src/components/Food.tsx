import {useContext} from "react";
import {MenuContext} from "../App";

const Food = ({food}) => {
  const menuContext = useContext(MenuContext);
  const {chosenFoods, chooseFood} = menuContext;
  const isInMenu = !!chosenFoods.find(item => item.id === food.id);

  return <div style={{border: '1px solid white', padding: 20}}>
    <p>Ten: {food.name}</p>
    <p>gía tiền: {food.price}</p>
    <button onClick={() => chooseFood(food)}>{isInMenu ? 'Bỏ' : 'Chọn'}</button>
  </div>
}

export default Food;