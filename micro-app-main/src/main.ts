/*
 * @Author: hainan dong
 * @Date: 2020-09-08 11:22:47
 * @LastEditTime: 2020-09-08 14:58:34
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \ja-front-template\micro-app-main\src\main.ts
 * @Code Is Everything
 */
import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import Antd from "ant-design-vue";
import startQiankun from "./micro";
import VueRouter from "vue-router";
import "./assets/styles/locale.antd.css";
Vue.use(Antd);
Vue.use(VueRouter);
Vue.config.productionTip = false;
startQiankun();
/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
