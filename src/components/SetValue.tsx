import React from 'react';
import {UniversalButton} from "./UniversalButton";

type SetValuePropsType = {
  set: () => void
  get: () => void
  startValue: number
  maxValue:number
}

export const SetValue = (props: SetValuePropsType) => {
  const getValueFromLocalStorage = () => {
    props.get()
  }

  return (
    <div>
      <div>
        <div>
          max value:
          <input type="number" />
        </div>
        <div>
          start value:
          <input type="number"/>
        </div>
      </div>
      <div>
        <UniversalButton titleName={"set"}
                         callBack={getValueFromLocalStorage}
                         disabled={props.startValue >= props.maxValue || (props.startValue && props.maxValue) < 0 }/>
      </div>
    </div>
  );
};
