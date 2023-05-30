import React, {FC} from "react";

const ChangeBackgroundButton:FC<{changeColor: (val: string) => void, color: string}> = ({changeColor, color}) => {
  console.log(123, changeColor)
  return <button onClick={() => changeColor(color)}>Đổi sang màu {color}</button>
}

export default React.memo(ChangeBackgroundButton);
