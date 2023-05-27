import React, {FC} from "react";

const Title:FC<{title: string}> = ({title}) => {
  console.log('render title 2');
  return <h3>{title}</h3>
}

export default Title;
