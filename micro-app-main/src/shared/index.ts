/*
 * @Author: hainan dong
 * @Date: 2020-09-08 14:45:27
 * @LastEditTime: 2020-09-08 14:54:37
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\shared\index.ts
 * @Code Is Everything
 */
import store from "./store";
class Shared {
  public getToken(): string {
    const state = store.getState();
    return state.token || "";
  }
  public setToken(token: string): void {
    store.dispatch({
      type: "SET_TOKEN",
      payload: token
    });
  }
}

const shared = new Shared();
export default shared;
