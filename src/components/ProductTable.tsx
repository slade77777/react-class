import Line from "./Line";
import Content from "./Content";

const listData = [
  "this is product 1",
  "this is product 2",
  "this is product 3",
  "this is product 4",
  "this is product 5",
]

export const ProductTable = () => {
  return <div>
    {
      listData.map((value, index) => <Line line={value} idLine={<p style={{ color: 'red' }}>id: {index}</p>} />)
    }
    <Content>
      <p>this is children parameter</p>
    </Content>
  </div>
}