import React, {FC} from "react";

const Title:FC<{title: string}> = ({title}) => {
  console.log('render title');
  return <h3>{title}</h3>
}

export default React.memo(Title);
