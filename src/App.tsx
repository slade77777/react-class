import './App.css'
import ClickAction from "./components/ClickAction";
import HoverAction from "./components/HoverAction";
import withIncrease from "./hoc/withIncrease";

const WrappedClick = withIncrease(ClickAction, 10);
const WrappedHover = withIncrease(HoverAction, 20);
function App() {


  return (
    <div className="App">
      <WrappedClick/>
      <WrappedHover />
    </div>
  )
}

export default App
