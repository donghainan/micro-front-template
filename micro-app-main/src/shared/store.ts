/*
 * @Author: hainan dong
 * @Date: 2020-09-08 14:45:34
 * @LastEditTime: 2020-09-08 14:52:11
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\shared\store.ts
 * @Code Is Everything
 */
import { createStore } from "redux";

export type State = {
  token?: string;
};

type Action = {
  type: string;
  payload: any;
};

const reducer = (state: State = {}, action: Action): State => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
const store = createStore<State, Action, unknown, unknown>(reducer);
export default store;
