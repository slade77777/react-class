import React, {FC} from "react";

const Title:FC<{title: string}> = ({title}) => {
  return <h3>{title}</h3>
}

export default Title;
