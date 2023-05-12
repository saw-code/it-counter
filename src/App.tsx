import React, {useEffect, useState} from 'react';
import './App.css';
import {UniversalButton} from "./components/UniversalButton";
import {Increment} from "./components/Increment";
import {SetValue} from "./components/SetValue";
import style from "./components/UniversalCSS.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
  changeIncrementAC,
  InitialStateTypes,
  setDisabledStateAC,
  setIncrementAC,
  setMaxAC,
  setStartAC
} from "./store/count-reducer";

function App() {
  const count = useSelector<AppRootStateType, InitialStateTypes>(state => state.count)

  const dispatch = useDispatch()

  const setToLocalStorageHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(count.startValue))
    localStorage.setItem('maxValue', JSON.stringify(count.maxValue))
    dispatch(setIncrementAC(count.startValue))
    dispatch(setDisabledStateAC(false))
  }

  const getFromLocalHandler = () => {
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    if (startValueAsString && maxValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      let newMaxValue = JSON.parse(maxValueAsString)
      dispatch(setStartAC(newStartValue))
      dispatch(setMaxAC(newMaxValue))
      dispatch(setIncrementAC(newStartValue))
    }
  }

  const changeIncrement = () => {
    dispatch(changeIncrementAC(1))
  }

  const resetIncrement = () => {
    dispatch(setIncrementAC(count.startValue))
  }

  useEffect(() => {
    getFromLocalHandler()
  }, [])

  const forDisabledSetButton = count.startValue >= count.maxValue || (count.startValue || count.maxValue) < 0
  const forDisabledIncButton = count.increment === count.maxValue || forDisabledSetButton
  const forDisabledResetButton = count.increment === 0 || forDisabledSetButton

  let stringValueForCounter = `enter values and press 'set'`

  if (forDisabledIncButton) {
    stringValueForCounter = "incorrect value!"
  }

  const checkSet = count.disabledState ? stringValueForCounter : count.increment

  return (
    <>
      <div className={style.setBlock}>
        <SetValue/>
        <div>
          <UniversalButton titleName={"set"}
                           callBack={setToLocalStorageHandler}
                           disabled={forDisabledSetButton}
          />

        </div>
      </div>

      <div className="App">
        <Increment increment={checkSet} maxValue={count.maxValue}/>
        <div>
          <UniversalButton disabled={count.disabledState || forDisabledIncButton}
                           titleName={"inc"}
                           callBack={changeIncrement}/>
          <UniversalButton disabled={count.disabledState  || forDisabledResetButton}
                           titleName={"reset"}
                           callBack={resetIncrement}/>
        </div>
      </div>
    </>
  )
}

export default App
