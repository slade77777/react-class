import Food from "./Food";

const listFoods = [
  {
    id: 1,
    name: 'banh my',
    price: 15
  },
  {
    id: 2,
    name: 'com',
    price: 10
  },
  {
    id: 3,
    name: 'my tom',
    price: 20
  },
  {
    id: 4,
    name: 'bun cha',
    price: 35
  },
  {
    id: 5,
    name: 'thit ga',
    price: 25
  },
]

const Menus = ({payMenu}) => {
  return <div>
    {
      listFoods.map((item, index) => <Food food={item} key={index} />)
    }
    <button onClick={payMenu}>thanh toán</button>
  </div>
}

export default Menus;