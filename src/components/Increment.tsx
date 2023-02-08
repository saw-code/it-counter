import React from 'react';
import s from "./UniversalCSS.module.css";

type IncrementPropsType = {
  increment: number
  maxValue: number
}

export const Increment = (props: IncrementPropsType) => {
  return (
    <div className={props.increment > 0 && props.increment === props.maxValue ? s.counter : ""}>
      {props.increment}
    </div>
  )
}
