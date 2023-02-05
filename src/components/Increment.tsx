import React from 'react';
import s from "./UniversalCSS.module.css";

type IncrementPropsType = {
  increment: number
}

export const Increment = (props: IncrementPropsType) => {
  return (
    <div className={props.increment === 5 ? s.counter : ""}>
      {props.increment}
    </div>
  )
}
