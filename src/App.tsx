import React, {useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton";
import {Increment} from "./components/Increment";

function App() {
  const [increment, setIncrement] = useState<number>(0)

  const changeIncrement = () => {
    setIncrement(increment + 1)
  }

  const resetIncrement = () => {
    setIncrement(0)
  }

  return (
    <div className="App">
      <Increment increment={increment}/>
      <div>
        <UniversalButton disabled={increment === 5} titleName={"inc"} callBack={changeIncrement}/>
        <UniversalButton disabled={increment === 0} titleName={"reset"} callBack={resetIncrement}/>
      </div>
    </div>
  )
}

export default App
