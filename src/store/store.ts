

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  count: countReducer
})


// непосредственно создаём store
export const store = legacy_createStore(rootReducer)

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store


// В результате const store = legacy_createStore(rootReducer) мы получим следующий объект:

// {
//   state: {
//     count: {
//       increment: 0,
//       startValue: 0,
//       maxValue:0,
//       disabledState: false
//     }
//   }
//
//   getState()
//   dispatch()
//   subscribe()
// }