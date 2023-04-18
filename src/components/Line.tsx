import {ReactElement} from "react";

export default function Line({line, idLine} : {line: string, idLine: ReactElement}) {
  return <div>
    <p>{line}</p>
    {idLine}
  </div>
}