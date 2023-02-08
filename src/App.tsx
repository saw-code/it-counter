import React, {useEffect, useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton";
import {Increment} from "./components/Increment";
import {SetValue} from "./components/SetValue";

function App() {
  const [increment, setIncrement] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(1)

  const setToLocalStorageHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    setIncrement(startValue)
  }

  const getFromLocalHandler = () => {
    let startValueAsString = localStorage.getItem('startValue')
    if (startValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      setStartValue(newStartValue)
    }
  }

  const changeIncrement = () => {
    setIncrement(increment + 1)
  }

  const resetIncrement = () => {
    setIncrement(0)
  }

  const forDisabledSetButton = startValue >= maxValue || (startValue || maxValue) < 0
  const forDisabledIncButton = increment === maxValue || forDisabledSetButton
  const forDisabledResetButton = increment === 0 || forDisabledSetButton

  return (
    <>
      <div>
        <SetValue setStart={setStartValue}
                  setMax={setMaxValue}
                  startValue={startValue}
                  maxValue={maxValue}
        />
        <div>
          <UniversalButton titleName={"set"}
                           callBack={setToLocalStorageHandler}
                           disabled={forDisabledSetButton}/>
        </div>
      </div>

      <div className="App">
        <Increment increment={increment} maxValue={maxValue}/>
        <div>
          <UniversalButton disabled={forDisabledIncButton}
                           titleName={"inc"}
                           callBack={changeIncrement}/>
          <UniversalButton disabled={forDisabledResetButton}
                           titleName={"reset"}
                           callBack={resetIncrement}/>
        </div>
      </div>
    </>
  )
}

export default App
