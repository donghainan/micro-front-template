/*
 * @Author: hainan dong
 * @Date: 2020-09-08 11:22:47
 * @LastEditTime: 2020-09-08 11:41:55
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\routes\index.ts
 * @Code Is Everything
 */
import Home from "@/views/home/index.vue";

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/",
    name: "Home",
    component: Home
  }
];

export default routes;
