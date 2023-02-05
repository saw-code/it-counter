import React from 'react';

type ButtonPropsType = {
  titleName: string
  callBack: () => void
  disabled: boolean
}

export const UniversalButton = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    props.callBack()
  }

  return (
    <button disabled={props.disabled} onClick={onClickHandler}>{props.titleName}</button>
  )
}
