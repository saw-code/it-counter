import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {InitialStateTypes, setDisabledStateAC, setMaxAC, setStartAC} from "../store/count-reducer";


export const SetValue = () => {

  const count = useSelector<AppRootStateType, InitialStateTypes>(state => state.count)

  const dispatch = useDispatch()

  const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxAC(event.currentTarget.valueAsNumber))
    if (event) {
      dispatch(setDisabledStateAC(true))
    }
  }

  const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartAC(event.currentTarget.valueAsNumber))
    if (event) {
      dispatch(setDisabledStateAC(true))
    }
  }

  return (
    <div>
      <div>
        <div>
          max value:
          <input value={count.maxValue} onChange={onChangeMaxValueHandler} type="number" />
        </div>
        <div>
          start value:
          <input value={count.startValue} onChange={onChangeStartValueHandler} type="number"/>
        </div>
      </div>

    </div>
  );
};
