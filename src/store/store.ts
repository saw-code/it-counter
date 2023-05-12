

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
  count: countReducer
})


// непосредственно создаём store
export const store = legacy_createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store


// В результате const store = legacy_createStore(rootReducer) мы получим следующий объект:

// {
//   state: {
//     tasks: {}
//     todolists: []
//   }
//
//   getState()
//   dispatch()
//   subscribe()
// }