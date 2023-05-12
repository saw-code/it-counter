export type InitialStateTypes = {
  increment: number
  startValue: number
  maxValue: number
  disabledState: boolean
}

const InitialState: InitialStateTypes = {
  increment: 0,
  startValue: 0,
  maxValue:0,
  disabledState: false
}

export const countReducer = (state= InitialState, action: ActionsType): InitialStateTypes => {
  switch (action.type) {
    case 'CHANGE_INCREMENT': {
      return {...state, increment: state.increment + action.payload.value}
    }

    case 'SET_INCREMENT': {
      return {...state, increment: action.payload.value}
    }

    case 'SET_START_VALUE': {
      return {...state, startValue: action.payload.value}
    }

    case 'SET_MAX_VALUE': {
      return {...state, maxValue: action.payload.value}
    }

    case 'SET_DISABLED_STATE': {
      return {...state, disabledState: action.payload.value}
    }

    default:
      return state
  }
}

export type ActionsType =
  ReturnType<typeof changeIncrementAC> |
  ReturnType<typeof setIncrementAC> |
  ReturnType<typeof setStartAC> |
  ReturnType<typeof setMaxAC>  |
  ReturnType<typeof setDisabledStateAC>


export const changeIncrementAC = (value: number) => {
  return {
    type: 'CHANGE_INCREMENT',
    payload: {
      value
    }
  } as const
}

export const setIncrementAC = (value: number) => {
  return {
    type: 'SET_INCREMENT',
    payload: {
      value
    }
  } as const
}

export const setStartAC = (value: number) => {
  return {
    type: 'SET_START_VALUE',
    payload: {
      value
    }
  } as const
}

export const setMaxAC = (value: number) => {
  return {
    type: 'SET_MAX_VALUE',
    payload: {
      value
    }
  } as const
}

export const setDisabledStateAC = (value: boolean) => {
  return {
    type: 'SET_DISABLED_STATE',
    payload: {
      value
    }
  } as const
}
