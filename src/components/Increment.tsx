import React from 'react';
import s from "./UniversalCSS.module.css";

type IncrementPropsType = {
  increment: number | string
  maxValue: number
}

export const Increment = (props: IncrementPropsType) => {
  const classNameForIncrement = props.increment > 0 && props.increment === props.maxValue ? s.counter : ""

  return (
    <div className={classNameForIncrement}>
      {props.increment}
    </div>
  )
}
