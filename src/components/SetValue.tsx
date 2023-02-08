import React, {ChangeEvent} from 'react';

type SetValuePropsType = {
  setStart: (startValue: number) => void
  setMax: (maxValue: number) => void
  startValue: number
  maxValue: number
}

export const SetValue = (props: SetValuePropsType) => {

  const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setMax(event.currentTarget.valueAsNumber)
  }

  const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setStart(event.currentTarget.valueAsNumber)
  }

  return (
    <div>
      <div>
        <div>
          max value:
          <input value={props.maxValue} onChange={onChangeMaxValueHandler} type="number" />
        </div>
        <div>
          start value:
          <input value={props.startValue} onChange={onChangeStartValueHandler} type="number"/>
        </div>
      </div>

    </div>
  );
};
