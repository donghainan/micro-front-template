/*
 * @Author: hainan dong
 * @Date: 2020-09-08 14:59:24
 * @LastEditTime: 2020-09-08 15:02:20
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-react\src\shared\actions.js
 * @Code Is Everything
 */
function emptyAction() {
  console.warn("Current execute action is empty!");
}
class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };
  setActions(actions) {
    this.actions = actions;
  }
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;
