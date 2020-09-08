/*
 * @Author: hainan dong
 * @Date: 2020-09-08 11:34:53
 * @LastEditTime: 2020-09-08 15:26:52
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\micro\apps.ts
 * @Code Is Everything
 */
import actions from '@/shared/actions'
const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "ReactMicroApp",
    entry: "//localhost:3000",
    container: "#frame",
    activeRule: "/react",
    props: {
      token: 'asdfsdf'
    }
  }
  // {
  //   name: "VueMicroApp",
  //   entry: "//localhost:10200",
  //   container: "#frame",
  //   activeRule: "/vue",
  // },
];

export default apps;
