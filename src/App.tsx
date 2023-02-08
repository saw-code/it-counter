import React, {useEffect, useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton";
import {Increment} from "./components/Increment";
import {SetValue} from "./components/SetValue";

function App() {
  const [increment, setIncrement] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(1)
  const [disabledState, setDisabledState] = useState<boolean>(false)

  const setToLocalStorageHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    setIncrement(startValue)
    setDisabledState(false)
  }

  const getFromLocalHandler = () => {
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    if (startValueAsString && maxValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      let newMaxValue = JSON.parse(maxValueAsString)
      setStartValue(newStartValue)
      setMaxValue(newMaxValue)
      setIncrement(newStartValue)
    }
  }

  const changeIncrement = () => {
    setIncrement(increment + 1)
  }

  const resetIncrement = () => {
    setIncrement(startValue)
  }

  useEffect(() => {
    getFromLocalHandler()
  }, [])

  const forDisabledSetButton = startValue >= maxValue || (startValue || maxValue) < 0
  const forDisabledIncButton = increment === maxValue || forDisabledSetButton
  const forDisabledResetButton = increment === 0 || forDisabledSetButton

  let stringValueForCounter = `enter values and press 'set'`

  if (forDisabledIncButton) {
    stringValueForCounter = "incorrect value!"
  }

  const checkSet = disabledState ? stringValueForCounter : increment

  return (
    <>
      <div>
        <SetValue setStart={setStartValue}
                  setMax={setMaxValue}
                  startValue={startValue}
                  maxValue={maxValue}
                  setDisabledState={setDisabledState}
        />
        <div>
          <UniversalButton titleName={"set"}
                           callBack={setToLocalStorageHandler}
                           disabled={forDisabledSetButton}
          />

        </div>
      </div>

      <div className="App">
        <Increment increment={checkSet} maxValue={maxValue}/>
        <div>
          <UniversalButton disabled={disabledState || forDisabledIncButton}
                           titleName={"inc"}
                           callBack={changeIncrement}/>
          <UniversalButton disabled={disabledState || forDisabledResetButton}
                           titleName={"reset"}
                           callBack={resetIncrement}/>
        </div>
      </div>
    </>
  )
}

export default App
