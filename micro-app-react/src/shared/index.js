/*
 * @Author: hainan dong
 * @Date: 2020-09-08 14:59:31
 * @LastEditTime: 2020-09-08 15:05:29
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-react\src\shared\index.js
 * @Code Is Everything
 */
class Shared {
  getToken() {
    return localStorage.getItem("token") || "";
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }
}

class SharedModule {
  static shared = new Shared();
  static overloadShared(shared) {
    SharedModule.shared = shared;
  }
  static getShared() {
    return SharedModule.shared;
  }
}

export default SharedModule;
