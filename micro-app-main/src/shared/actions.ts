/*
 * @Author: hainan dong
 * @Date: 2020-09-08 14:45:11
 * @LastEditTime: 2020-09-08 15:11:56
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\shared\actions.ts
 * @Code Is Everything
 */
import { initGlobalState, MicroAppStateActions } from "qiankun";
const initialState = {
  a: 123
};
const actions: MicroAppStateActions = initGlobalState(initialState);
export default actions;
