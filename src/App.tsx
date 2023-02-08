import React, {useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton";
import {Increment} from "./components/Increment";
import {SetValue} from "./components/SetValue";

function App() {
  const [increment, setIncrement] = useState<number>(0)
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1)

  const setToLocalStorageHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }

  const getFromLocalHandler = () => {
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    if (startValueAsString && maxValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      let newMaxValue = JSON.parse(maxValueAsString)
      setStartValue(newStartValue)
      setMaxValue(newMaxValue)
    }
  }

  const changeIncrement = () => {
    setIncrement(increment + 1)
  }

  const resetIncrement = () => {
    setIncrement(0)
  }

  return (
    <>
      <div>
        <SetValue set={setToLocalStorageHandler}
                  get={getFromLocalHandler}
                  startValue={startValue}
                  maxValue={maxValue}
        />
      </div>

      <div className="App">
        <Increment increment={increment}/>
        <div>
          <UniversalButton disabled={increment === 5} titleName={"inc"} callBack={changeIncrement}/>
          <UniversalButton disabled={increment === 0} titleName={"reset"} callBack={resetIncrement}/>
        </div>
      </div>
    </>
  )
}

export default App
